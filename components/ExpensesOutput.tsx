import {View} from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

type PropsType = {
  expenses: any;
};

const ExpensesOutput: React.FC<PropsType> = ({expenses}) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
