import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface Props {
  label: string;
  textInputConfig?: TextInputProps;
}

function Input({label, textInputConfig}: Props) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
