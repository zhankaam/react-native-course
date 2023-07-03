import axios from 'axios';
import {ExpenseDataType} from '../store/expenses-context';

const BACKEND_URL =
  'https://react-native-course-6a569-default-rtdb.firebaseiocom';

export async function storeExpense(expenseData: Omit<ExpenseDataType, 'id'>) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData,
  );
  const id = response.data.name;
  return id;
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses as ExpenseDataType[];
}

export function updateExpense(
  id: string,
  expenseData: Omit<ExpenseDataType, 'id'>,
) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id: string) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`);
}
