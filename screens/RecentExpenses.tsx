import React, {useContext, useEffect} from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {getExpenses} from '../util/http';

export function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses();
      expensesCtx.setExpenses(expenses);
    }

    fetchExpenses();
  }, [expensesCtx]);

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}
