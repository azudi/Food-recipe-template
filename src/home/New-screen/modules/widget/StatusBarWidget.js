import React, { useEffect } from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    Platform
  } from 'react-native';
import { theme } from '../../../../theme';

export default function StatusBarWidget() {



   const OS_Staus_bar =()=>{
    return StatusBar.currentHeight
   }

  return (
    <View style={{ height: OS_Staus_bar(), backgroundColor: theme.dark_background}}>
      <SafeAreaView style={{backgroundColor: theme.dark_background}}>
        <StatusBar translucent backgroundColor={theme.dark_background} />
      </SafeAreaView>
    </View>
  );
}
