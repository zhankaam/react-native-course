import {FlatList} from 'react-native';
import React from 'react';
import {ExpenseDataType} from './ExpensesOutput';
import {ExpenseItem} from './ExpenseItem';

function renderExpenseItem(itemData: {item: ExpenseDataType}) {
  return <ExpenseItem {...itemData.item} />;
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
