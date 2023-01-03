import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {theme} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import SIdeNav from './modules/navbar/SIdeNav';
import {useSelector, useDispatch} from 'react-redux';
import {hidenav} from '../redux/slice/Slice';
import { verticalScale } from '../functions/responsiveLayout';

function Template({children}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const swipeEffect = (dir, state) => {
    const {moveX, x0} = state;

    if (moveX - x0 > verticalScale(70)) {
      dispatch(hidenav(false));
    } else if (x0 - moveX > verticalScale(70)) {
      dispatch(hidenav(true));
    }
  };

  useEffect(()=>{

      dispatch(hidenav(true));
  }, [navigation.addListener()])

  return (
    <SafeAreaView style={{backgroundColor: theme.dark_background}}>
      <GestureRecognizer
        onSwipe={(direction, state) => swipeEffect(direction, state)}>
        <SIdeNav navigation={navigation} />
        {children}
      </GestureRecognizer>
    </SafeAreaView>
  );
}

export default Template;
