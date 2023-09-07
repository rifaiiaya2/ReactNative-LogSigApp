import { Image, ImageBackground, View } from 'react-native';
import React, { Children } from 'react';

// eslint-disable-next-line @typescript-eslint/no-shadow
const Background = ({ children }) => {
  return (
    <View>
      <Image source={require('./assets/leaves.jpg')} style={{ height: '100%' }} />
      <View style={{ position: 'absolute' }}>{children}</View>
    </View>
  );
};
export default Background;
