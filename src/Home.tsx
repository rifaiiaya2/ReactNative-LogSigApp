import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: 'white', fontSize: 56 }}> Green Oasis</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 46,
            fontStyle: 'italic',
            marginBottom: 40,
          }}>
          GreenEra
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="SignUp"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({});
export default Home;
