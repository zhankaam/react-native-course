import axios from 'axios';

const API_KEY = 'AIzaSyBtKNXgXjCeDwO2KSt4ThEcHN_q9uc2aYc';

function authenticate(mode: string, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  axios.post(url, {email, password, returnSecureToken: true});
}

export async function createUser(email: string, password: string) {
  await authenticate('signUp', email, password);
}

export async function login(email: string, password: string) {
  await authenticate('signInWithPassword', email, password);
}
