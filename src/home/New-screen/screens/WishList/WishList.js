import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import Template from '../../Template';
import Image from 'react-native-scalable-image';
import {theme} from '../../../../theme';
import Divider from '../../modules/widget/Divider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeleteIcon from '../../svgicon/DeleteIcon';
import useRemoveStorage from '../../../../services/hooks/useRemoveStorage';
import PermitDelete from './modals/PermitDelete';
import { useOrientation } from '../../../../services/hooks/orientation';
import { SCR_HEIGHT, SCR_WIDTH } from '../../../../utils';




export default function WishList({navigation, route}) {
  const [cart, setCart] = useState([]);
  const [showPermitModal, setShowPermitModal] = useState(false);
  const [activeList, setActivelist] = useState({})
  const { orientation, isPortrait } = useOrientation()

  useEffect(() => {
    cartStorage();
  }, []);

  const cartStorage = async () => {
    try {
      let cartStorageInfo = await AsyncStorage.getItem('@azudi');
      setCart(JSON.parse(cartStorageInfo));
      await cartStorage()
      console.log('finish')
    } catch (e) {
      console.log(e);
    }
  };

  const removeStore = async () => {
    useRemoveStorage('@azudi', activeList);
    setShowPermitModal(false)
    await cartStorage()
  };

  const widthAdjust= ()=>{
    return isPortrait() ? SCR_WIDTH - 145 : SCR_HEIGHT - 145
  }

  return (
    <Template>
      <PermitDelete
        showPermitModal={showPermitModal}
        closeModal={() => setShowPermitModal(false)}
        removeStore={ removeStore }
      />
      <ScrollView
        style={{
          backgroundColor: 'white',
          height: '100%',
          padding: 10,
          width: '100%',
        }}>
        <View>
          <Text style={style.WishList_header}> WishList </Text>
        </View>
        <Divider />
        <View>
          {(cart || []).map((item, index) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('recipe', {id: `${item.idMeal}`});
                }}
                key={item.idMeal + index}
                style={[style.list_item, style.box_shadow]}>
                <View style={{width: 110}}>
                  <Image
                    width={100}
                    style={{borderRadius: 10}}
                    source={
                      {
                        uri: item.strMealThumb,
                      } ||
                      require('../../../../../assets/images/chad-montano-pizza-unsplash.jpg')
                    }></Image>
                  <Text style={style.list_head}>{item?.strMeal}</Text>
                </View>
                <View style={{width: widthAdjust()}}>
                  <Text style={{fontFamily: 'RedHatDisplay-Medium'}}>
                    {item?.strInstructions?.length > 180
                      ? `${item?.strInstructions?.substring(0, 180)} ...`
                      : item?.strInstructions}
                  </Text>
                  <Pressable
                    onPress={() => {
                      setShowPermitModal(true);
                      setActivelist(item)
                    }}
                    style={[style.delete_icon, style.box_shadow]}>
                    <DeleteIcon />
                  </Pressable>
                </View>
              </Pressable>
            );
          })}

          {!cart?.length ? (
            <View>
              <Text style={style.no_item}>No Item on Wishlist</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </Template>
  );
}

const style = StyleSheet.create({
  WishList_header: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 20,
    paddingVertical: 10,
  },
  list_item: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },
  box_shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.15,
    elevation: 3,
    zIndex: 999,
    shadowRadius: 3,
    // background color must be set
    backgroundColor: '#fff', // invisible color
  },
  list_head: {
    fontFamily: 'RedHatDisplay-Medium',
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
    backgroundColor: theme.dark_background,
    color: 'white',
    paddingHorizontal: 5,
    borderBottomLeftRadius: 10,
  },
  no_item: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-Medium',
    paddingVertical: 20,
  },
  delete_icon: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    right: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
