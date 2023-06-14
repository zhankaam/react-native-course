import React, {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';

export function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} />
  );
}
