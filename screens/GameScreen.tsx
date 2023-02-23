import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

type PropsType = {
  userNumber: number;
  onGameOver: () => void;
};

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({userNumber, onGameOver}: PropsType) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, onGameOver, userNumber]);

  function nextGuessHandler(direction: 'lower' | 'greater') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }

    const randomNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess,
    );
    setCurrentGuess(randomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text> Higher or lower?</Text>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
          +
        </PrimaryButton>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
