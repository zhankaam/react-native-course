/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button, StatusBar} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

// 019
function App(): JSX.Element {
  const [modalIsVisible, setModalisVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<
    Record<'text' | 'id', string>[]
  >([]);

  function startAddGoalHandler() {
    setModalisVisible(true);
  }

  function endAddGoalHandler() {
    setModalisVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteItemHandler(id: string) {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.id !== id),
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
