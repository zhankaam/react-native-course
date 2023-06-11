import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput';

export function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}
