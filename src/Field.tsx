import { TextInput } from 'react-native'
import React from 'react'
import { darkGreen } from './Constants';
const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizantal: 10,
        width: '78%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen} />
  );
};
export default Field;