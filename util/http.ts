import axios from 'axios';
import {ExpenseDataType} from '../components/ManageExpense/ExpenseForm';

const BACKEND_URL =
  'https://react-native-course-6a569-default-rtdb.firebaseio.com';

export function storeExpense(expenseData: ExpenseDataType) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
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

  return expenses;
}
