import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

type PropsType = {
  children: ReactNode;
};

function Title({children}: PropsType) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
