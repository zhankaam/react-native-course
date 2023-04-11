import {Text, View} from 'react-native';
import React from 'react';

const MealDetailScreen = ({route}: any) => {
  const {mealId} = route.params;
  return (
    <View>
      <Text>This is the Meal Detail screen ({mealId})</Text>
    </View>
  );
};

export default MealDetailScreen;
