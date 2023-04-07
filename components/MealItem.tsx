import {Text, View} from 'react-native';
import React from 'react';

function MealItem({title}: {title: string}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default MealItem;
