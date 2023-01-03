import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import Topsearch from '../modules/TopSearch/Topsearch';
import Template from '../Template';
import Image from 'react-native-scalable-image';
import {NUM_MEAL_COLUMN, SCR_HEIGHT, SCR_WIDTH, SEMI_SCR_WIDTH, SWITCH_WIDTH_DISPLAY, TQUATER_SCR_WIDTH} from '../../../utils';
import {useQuery} from 'react-query';
import apis from '../../../services/apiFactory';
import Loader from '../modules/widget/loader';
import { verticalScale } from '../../functions/responsiveLayout';
import { switchWidthDisplay, useOrientation } from '../../../services/hooks/orientation';




function HomePage({navigation, route}) {
  const [searchString, setSearchString] = useState('');
  const [initialPort, setInitialPort] = useState(2)
  const { orientation, isPortrait } = useOrientation()





  const {
    isLoading,
    error,
    isError,
    isFetching,
    refetch,
    data: dataByCategory,
  } = useQuery('categoryRecipe', () =>
    apis.app.byCategory(searchqueryOptions()),
    {
      refetchOnReconnect: true
    }
  );

  const extractedInfo = dataByCategory?.data?.meals || [];

  useEffect(()=>{
    getMeals()
  }, [])

  useEffect(()=>{
    setInitialPort( isPortrait() ? 2 : 3)
  }, [orientation])


  const getMeals=()=>{
    let val = apis.app.byCategory(searchqueryOptions())
    .then((res)=> {console.log('val', res)})
  
  }

  const searchqueryOptions = () => {
    let string = '';
    return searchString.trim() == ''
      ? `filter.php?c=${route?.params?.category || 'Seafood'}`
      : `search.php?f=${route?.params?.category || 'a'}`;
  };

  const searchFunc = val => {
    setSearchString(val);
    refetch();
  };

  useEffect(()=>{
    console.log(verticalScale()) 
  }, [])

  const responsiveWidth = ()=>{
    console.log(switchWidthDisplay())
    return isPortrait() ? (SCR_WIDTH/2) - 20 : (switchWidthDisplay()/3) - 20
  }







  const renderItem = (item)=>{
    return (
          <Pressable
          onPress={() => {
            navigation.navigate('recipe', {id: `${item.idMeal}`});
          }}
          style={{width: responsiveWidth(), paddingTop: 20}}>
          <Image
            width={responsiveWidth() }
            style={{borderRadius: 20}}
            source={
             {
                uri: item.strMealThumb,
              } ||
              require('../../../../assets/images/chad-montano-pizza-unsplash.jpg') 
            }></Image>
          <Text style={style.recipe_header}>{item?.strMeal}</Text>
        </Pressable>
    )
  }

  return (
    <Template>
      <View style={{height: '100%'}}>
        <View>
          <Topsearch searchFunc={searchFunc} />
        </View>
        <View style={style.content_container}>
          {isFetching ? <Loader /> : null}
          {extractedInfo.length < 0 || isError ? (
            <Text style={{textAlign: 'center'}}>No recipe found</Text>
          ) : null}


          <FlatList
            data={extractedInfo}
            scrollEnabled={true}
            horizontal={false}
            numColumns={isPortrait() ? 2 : 3}
            removeClippedSubviews={true}
            initialNumToRender={10} 
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: 'column',
            }}
            renderItem={({item}) => renderItem(item) }
            key={(isPortrait() ? 'h' : 'v')}
            keyExtractor={item => item?.idMeal}
          />
        </View>
      </View>
    </Template>
  );
}

export default HomePage;

export const style = StyleSheet.create({
  content_container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20,
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  recipe_header: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 15,
    fontFamily: 'RedHatDisplay-Bold',
  },
});
