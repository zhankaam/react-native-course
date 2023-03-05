import React, {ReactNode} from 'react';
import {StyleSheet, Text, Platform} from 'react-native';

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
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
