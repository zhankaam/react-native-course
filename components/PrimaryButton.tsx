import {ReactNode} from 'react';
import {Text, View} from 'react-native';

type PropsType = {
  children: ReactNode;
};

function PrimaryButton({children}: PropsType) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
