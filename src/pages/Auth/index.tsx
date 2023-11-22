import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/DefaultButton';
import Headline from '../../components/DefaultHeadline';
import ImageContainer from '../../components/ImageContainer';
import Modal from './SignIn';

const Auth = ({ navigation }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Headline
        title="Sign in or create an account"
        styles={{ marginTop: 25 }}
      />
      <ImageContainer img={require('../../../assets/images/auth-image.png')} />
      <View style={style.buttonContainer}>
        <Button
          title="Sign in"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          containerStyles={{ marginBottom: 18 }}
        />
        <Button
          title="Create an account"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </Container>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    top: '10%',
  },
});
export default Auth;
