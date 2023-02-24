import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {COLORS} from '../../constants/colors';

type PropsType = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

function InstructionText({children, style}: PropsType) {
  return <Text style={[styles.intructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  intructionText: {
    color: COLORS.accent500,
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
  },
});

export default InstructionText;
