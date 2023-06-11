import {FlatList, Text} from 'react-native';
import React from 'react';
import {ExpenseDataType} from './ExpensesOutput';

function renderExpenseItem(itemData: {item: ExpenseDataType}) {
  return <Text>{itemData.item.description}</Text>;
}

type PropsType = {
  expenses: ExpenseDataType[];
};

const ExpensesList = ({expenses}: PropsType) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;
