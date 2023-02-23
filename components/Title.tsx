import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants/colors';

type PropsType = {
  children: ReactNode;
};

function Title({children}: PropsType) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: COLORS.accent500,
    padding: 12,
  },
});

export default Title;
