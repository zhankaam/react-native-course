import React, {useLayoutEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {CATEGORIES, MEALS} from '../data/dummy-data';

import {IMeal} from '../models/meal';
import {RootStackParamList} from '../App';
import {MealsList} from '../components/MealsList/MealsList';

export type ItemDataType = {
  item: IMeal;
};

type PropsType = {
  route: RouteProp<RootStackParamList, 'MealsOverview'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'MealsOverview'>;
};

const MealsOverviewScreen = ({route, navigation}: PropsType) => {
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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
