import axios from 'axios';
import {ExpenseDataType} from '../components/ManageExpense/ExpenseForm';

export function storeExpense(expenseData: ExpenseDataType) {
  axios.post(
    'https://react-native-course-6a569-default-rtdb.firebaseio.com/expenses.json',
    expenseData,
  );
}
