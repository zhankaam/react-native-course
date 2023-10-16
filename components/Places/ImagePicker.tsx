import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {launchCamera} from 'react-native-image-picker';

const ImagePicker = () => {
  const takeImageHandler = async () => {
    const image = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      quality: 0.5,
    });
    console.log(image);
  };

  return (
    <View>
      <Text>ImagePicker</Text>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
