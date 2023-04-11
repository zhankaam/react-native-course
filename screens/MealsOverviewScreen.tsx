import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route, navigation}: any) => {
  // const route = useRoute();
  const {categoryId} = route.params;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData: any) {
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
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
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
