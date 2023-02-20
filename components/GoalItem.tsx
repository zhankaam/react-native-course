import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

type PropsType = {
  id: string;
  text: string;
  onDeleteItem: (id: string) => void;
};

function GoalItem({id, text, onDeleteItem}: PropsType) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
