import {View, Text} from 'react-native';
import React from 'react';
import {ExpenseDataType} from './ExpensesOutput';

type PropsType = {
  expenses: ExpenseDataType[];
  periodName: string;
};

const ExpensesSummary: React.FC<PropsType> = ({expenses, periodName}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
