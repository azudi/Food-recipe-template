import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {theme} from '../../../../theme';
import {SCR_HEIGHT, SCR_WIDTH, SWITCH_WIDTH_DISPLAY} from '../../../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {hidenav} from '../../../redux/slice/Slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartIcon from '../../svgicon/CartIcon';
import SectionIcon from '../../svgicon/SectionsIcon';
import ArrowDown from '../../svgicon/ArrowDown';
import Divider from '../widget/Divider';
import Policy from '../../svgicon/Policy';
import { switchWidthDisplay, useOrientation } from '../../../../services/hooks/orientation';




export default function SIdeNav() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { orientation, isPortrait } = useOrientation()

  const hideNavbar = useSelector(state => state.app.hideNavbar);
  const [cart, setCart] = useState();
  const [navDisplay, setNavDisplay] = useState('none');
  const translation = useRef(new Animated.Value(0)).current;
  const Animateheight = useRef(new Animated.Value(0)).current;

  const [sideContent, setSidecontent] = useState([
    {strCategory: 'Beef'},
    {strCategory: 'Breakfast'},
    {strCategory: 'Chicken'},
    {strCategory: 'Dessert'},
    {strCategory: 'Goat'},
    {strCategory: 'Lamb'},
    {strCategory: 'Miscellaneous'},
    {strCategory: 'Pasta'},
    {strCategory: 'Pork'},
    {strCategory: 'Seafood'},
    {strCategory: 'Side'},
    {strCategory: 'Starter'},
    {strCategory: 'Vegan'},
    {strCategory: 'Vegetarian'},
  ]);

  useEffect(() => {
    cartStorage();
  }, []);

  useEffect(() => {
    Animated.timing(translation, {
      toValue: hideNavbar ? 0 : orientationWidth(),
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [hideNavbar]);

  const cartStorage = async () => {
    try {
      let cartStorageInfo = await AsyncStorage.getItem('@azudi');
      setCart(JSON.parse(cartStorageInfo));
    } catch (e) {
      console.log(e);
    }
  };

  let initial = true;
  const toggleNavItem = () => {
    Animated.timing(Animateheight, {
      toValue: initial ? sideContent.length * 29.17 : 0,
      useNativeDriver: false,
      duration: 200,
    }).start();
    initial = !initial;
  };
  translation;

const orientationWidth = ()=>{
 return ( isPortrait() ? SCR_WIDTH : switchWidthDisplay())
}




  return (
    <Animated.ScrollView
      style={[style.nav_container, {transform: [{translateX: translation}], left: -(orientationWidth())}]}>
      <Text style={style.nav_header}>Green section</Text>
      <Divider />

      <View>
        <Pressable style={{width: '95%'}} onPress={() => toggleNavItem()}>
          <View
            style={{alignItems: 'center', flexDirection: 'row', paddingTop: 5}}>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <SectionIcon />
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'RedHatDisplay-Medium',
                  paddingLeft: 7,
                }}>
                Category
              </Text>
            </View>
            <View style={{width: '50%', alignItems: 'flex-end'}}>
              <ArrowDown />
            </View>
          </View>
        </Pressable>

        <Animated.View style={{overflow: 'hidden', height: Animateheight}}>
          {sideContent.map((item, index) => {
            return (
              <TouchableOpacity
                key={index + item.strCategory}
                onPress={() => {
                  dispatch(hidenav(true));
                  navigation.push('homepage', {
                    category: item?.strCategory,
                  });
                }}>
                <Text style={style.nav_item}>{item?.strCategory}</Text>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      </View>

      <View style={{marginTop: 10}}>
        <Pressable
          onPress={() => {
            dispatch(hidenav(true));
            navigation.navigate('wishlist');
          }}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 5,
            width: '95%',
          }}>
          <View
            style={{
              fontSize: 17,
              fontFamily: 'RedHatDisplay-Medium',
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                paddingRight: 5,
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CartIcon />
              <Text
                style={{
                  fontSize: 17,
                  width: '50%',
                  paddingLeft: 7,
                  fontFamily: 'RedHatDisplay-Medium',
                }}>
                Cart
              </Text>
            </View>

            <Text
              style={{
                width: '50%',
                textAlign: 'right',
                paddingRight: 7,
                fontFamily: 'RedHatDisplay-Bold',
              }}>
              {cart?.length}
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={{marginTop: 10}}>
        <Pressable
          onPress={() => {
            dispatch(hidenav(true));
            navigation.navigate('privacy');
          }}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 5,
          }}>
          <Text style={{paddingRight: 5}}>
            <Policy />
          </Text>
          <Text style={{fontSize: 17, fontFamily: 'RedHatDisplay-Medium'}}>
            Privacy policy
          </Text>
        </Pressable>
      </View>
    </Animated.ScrollView>
  );
}

const style = StyleSheet.create({
  nav_container: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: 999,
    padding: 10,
  },
  nav_item: {
    paddingBottom: 6,
    paddingTop: 5,
    paddingLeft: 30,
    fontFamily: 'RedHatDisplay-Medium',
  },
  nav_header: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'RedHatDisplay-Black',
  },
  cart_num: {
    backgroundColor: theme.dark_background,
    width: 30,
    height: 20,
    color: 'red',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart_text: {
    color: 'white',
    fontFamily: 'RedHatDisplay-Bold',
  },
});
