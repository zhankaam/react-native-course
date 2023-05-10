import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ItemDataType} from '../../screens/MealsOverviewScreen';

import Meal from '../../models/meal';
import MealItem from './MealItem';

export const MealsList = ({items}: {items: Meal[]}) => {
  function renderMealItem(itemData: ItemDataType) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
