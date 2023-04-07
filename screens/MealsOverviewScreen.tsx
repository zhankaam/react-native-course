import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route}: any) => {
  // const route = useRoute();
  const {categoryId} = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
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
