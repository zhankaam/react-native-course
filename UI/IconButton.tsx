import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

type PropsType = {
  icon: string;
  size: number;
  color: string;
  onPress: () => void;
};

const IconButton: FC<PropsType> = ({icon, size, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
