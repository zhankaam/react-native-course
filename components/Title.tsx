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
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});

export default Title;
