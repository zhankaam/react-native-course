/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createContext, useReducer} from 'react';

export type ExpenseDataType = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const DUMMY_EXPENSES: ExpenseDataType[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-06-11'),
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-06-12'),
  },
  {
    id: 'e8',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-06-13'),
  },
  {
    id: 'e9',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2023-06-14'),
  },
];

export const ExpensesContext = createContext({
  expenses: [] as ExpenseDataType[],
  addExpense: ({description, amount, date}: Omit<ExpenseDataType, 'id'>) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    {description, amount, date}: Omit<ExpenseDataType, 'id'>,
  ) => {},
});

function expensesReducer(state: ExpenseDataType[], action: any) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id}, ...state];
    case 'UPDATE':
      const updatedableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatedableExpense = state[updatedableExpenseIndex];
      const updatedItem = {...updatedableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatedableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

type ProviderType = {
  children: React.ReactNode;
};

function ExpensesContextProvider({children}: ProviderType) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: Omit<ExpenseDataType, 'id'>) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id: string) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id: string, expenseData: Omit<ExpenseDataType, 'id'>) {
    dispatch({type: 'UPDATE', payload: {id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
