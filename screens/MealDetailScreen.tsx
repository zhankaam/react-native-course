import React, {useCallback, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {MEALS} from '../data/dummy-data';

import MealDetails from '../components/MealDetails';
import {Subtitle} from '../components/MealDetail/Subtitle';
import {List} from '../components/MealDetail/List';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IconButton} from '../components/IconButton';
import {RootStateType} from '../store/redux/store';
import {addFavorite, removeFavorite} from '../store/redux/favorites';

interface IProps {
  route: RouteProp<RootStackParamList, 'MealDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Drawer'>;
}

const MealDetailScreen = ({route, navigation}: IProps) => {
  const favoriteMealIds = useSelector(
    (state: RootStateType) => state.favoriteMeals.ids,
  );
  const {mealId} = route.params;
  const dispatch = useDispatch();
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }, [dispatch, mealId, mealIsFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  if (!selectedMeal) {
    return null;
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
});

export default MealDetailScreen;
