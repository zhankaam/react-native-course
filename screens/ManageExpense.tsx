import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {Text, View} from 'react-native';
import {StackParamList} from '../App';

export function ManageExpense({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'ManageExpense'>) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
}
