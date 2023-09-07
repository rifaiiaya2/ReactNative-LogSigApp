import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from './Background';
import { darkGreen } from './Constants';
import Field from './Field';
import Btn from './Btn';

const Signup = props => {
  return (
    <Background>
      <View
        style={{
          alignItems: 'center',
          width: 460,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          SignUp
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / UserName"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'numeric'} />

          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
              }}>
              By signing in, you agree to our {''}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Term & Conditions
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
              }}>
              and {''}
              {''}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              Alert.alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'gray',
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
