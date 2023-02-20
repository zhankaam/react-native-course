/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

// 019
function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState<
    Record<'text' | 'id', string>[]
  >([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  function deleteItemHandler(id: string) {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.id !== id),
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteItemHandler}
            />
          )}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
