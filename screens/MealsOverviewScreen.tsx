import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {MEALS} from '../data/dummy-data';

const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
