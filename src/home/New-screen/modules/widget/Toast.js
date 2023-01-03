import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {showToast} from '../../../redux/slice/Slice';
import InfoIcon from '../../svgicon/InfoIcon';

export default function Toast({message, action}) {
  const toast = useSelector(state => state.app.toast);
  const dispatch = useDispatch();

  let interval;
  useEffect(() => {
    interval = setTimeout(() => {
      if (!toast.action) return;
      dispatch(
        showToast({action: false, status: 'success', msg: 'done successfully'}),
      );
      clearTimeout(interval);
    }, 5000);
  }, [toast.action]);

  const hideToast = () => {
    dispatch(showToast({action: false, msg: 'done successfully'}));
    clearTimeout(interval);
  };

  const chooseColor = val => {
    let statusReturn = null;
    switch (val) {
      case 'success':
        statusReturn = '#5cb85c';
        break;
      case 'danger':
        statusReturn = '#d9534f';
        break;
      case 'info':
        statusReturn = '#aaacc9';
        break;
      default:
        statusReturn = '#5cb85c';
        break;
    }
    return statusReturn;
  };

  return (
    <>
      {toast?.action ? (
        <View style={style.toast_container}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <InfoIcon color={chooseColor(toast.status)} />
            <Text style={style.info_text}>{toast.msg}</Text>
          </View>
          <Pressable onPress={() => hideToast()}>
            <Text style={{width: 10}}>&#10006;</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
}

const style = StyleSheet.create({
  toast_container: {
    position: 'absolute',
    top: 0,
    right: 10,
    padding: 10,
    width: '80%',
    zIndex: 1000,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  info_text: {
    fontFamily: 'RedHatDisplay-Bold',
    paddingRight: 10,
    paddingLeft: 7,
    fontSize: 14,
  },
});
