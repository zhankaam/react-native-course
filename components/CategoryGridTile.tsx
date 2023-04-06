import {Pressable, Text, View} from 'react-native';
import React from 'react';

type PropsType = {
  title: string;
  color: string;
};

function CategoryGridTile({title, color}: PropsType) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
