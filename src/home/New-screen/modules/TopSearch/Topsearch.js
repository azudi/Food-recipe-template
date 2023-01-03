import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {theme} from '../../../../theme';
import NavIcon from '../../svgicon/NavIcon';
import Search from '../../svgicon/Search';
import {useSelector, useDispatch} from 'react-redux';
import {hidenav} from '../../../redux/slice/Slice';

export default function Topsearch({searchFunc}) {
  const dispatch = useDispatch();
  const [navVisible, setNavVisible] = useState(false);
  const [searchStr, setsearchstr] = useState('')

  const sideNav = () => {
  setNavVisible(!navVisible);
    dispatch(hidenav(navVisible));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        padding: 20,
      }}>
      <View
        style={{
          backgroundColor: theme.white,
          flexDirection: 'row',
          width: '100%',
          borderRadius: 50,
          overflow: 'hidden',
        }}>
        <TextInput 
        autoCorrect={true}
        returnKeyType='search'
        onChangeText={(value)=>{
          setsearchstr(value)
        }}
        onSubmitEditing={()=>{
          searchFunc(searchStr)
        }}
        style={style.input_container} placeholder="Input only a letter to search" />
        <Pressable
        onPress={()=> searchFunc(searchStr)}
        style={[style.container, {backgroundColor: 'tranparent'}]}>
          <Search />
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    color: 'red',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  input_container: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: 10,
    fontSize: 15,
    paddingLeft: 20,
    fontFamily: 'RedHatDisplay-Regular'
  },
});
