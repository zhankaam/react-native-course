import React from 'react';

import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/ionicons';

Ionicons.loadFont();

type PropsType = {
  icon: any;
  color: string;
  size: number;
  onPress: () => void;
};

function IconButton({icon, color, size, onPress}: PropsType) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
