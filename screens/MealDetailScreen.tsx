import {Image, Text, View} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import {RouteProp} from '@react-navigation/native';

interface IProps {
  route: RouteProp<{params: {mealId: string}}, 'params'>;
}

const MealDetailScreen = ({route}: IProps) => {
  const {mealId} = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  if (!selectedMeal) {
    return null;
  }

  return (
    <View>
      <Image source={{uri: selectedMeal.imageUrl}} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;
