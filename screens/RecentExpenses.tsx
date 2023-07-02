import React, {useContext, useEffect, useState} from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {getExpenses} from '../util/http';
import LoadingOverlay from '../UI/LoadingOverlay';

export function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });

  useEffect(() => {
    async function fetchExpenses() {
      setIsFetching(true);
      const expenses = await getExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }

    fetchExpenses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}
