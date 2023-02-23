import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/colors';

type PropsType = {
  children: ReactNode;
};

function InstructionText({children}: PropsType) {
  return <Text style={styles.intructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  intructionText: {
    color: COLORS.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
