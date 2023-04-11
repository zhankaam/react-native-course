import React from 'react';
import {FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {ICategory} from '../models/category';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ItemDataType = {
  item: ICategory;
};

type PropsType = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MealsCategories'>;
};

function CategoriesScreen({navigation}: PropsType) {
  function renderCategoryItem(itemData: ItemDataType) {
    function pressHadler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHadler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
