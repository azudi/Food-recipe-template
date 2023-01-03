import React from 'react';
import {Text} from 'react-native';

export default function TextWrap({children}) {
  return (
    <Text
      style={{
        fontFamily: 'RedHatDisplay-Regular',
        textAlign: 'left',
        marginBottom: 10,
      }}>
      {children}
    </Text>
  );
}
