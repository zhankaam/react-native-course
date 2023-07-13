import axios from 'axios';

const API_KEY = 'AIzaSyBtKNXgXjCeDwO2KSt4ThEcHN_q9uc2aYc';

interface IResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface ISignUpResponse {}

interface ILoginResponse {
  registered: boolean;
}

async function authenticate<R>(mode: string, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post<R & IResponse>(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email: string, password: string) {
  return authenticate<ISignUpResponse>('signUp', email, password);
}

export function login(email: string, password: string) {
  return authenticate<ILoginResponse>('signInWithPassword', email, password);
}
