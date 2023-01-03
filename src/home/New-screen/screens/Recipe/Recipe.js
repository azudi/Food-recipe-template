import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Linking,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Loader from '../../modules/widget/loader';
import ArrowBack from '../../svgicon/BackArrow';
import Template from '../../Template';
import LinearGradient from 'react-native-linear-gradient';
import {useQuery} from 'react-query';
import apis from '../../../../services/apiFactory';
import CategoryIcon from '../../svgicon/Category';
import OriginIcon from '../../svgicon/OriginIcon';
import PlayIcon from '../../svgicon/PlayIcon';
import {theme} from '../../../../theme';
import AddtoStorage from '../../../../services/hooks/useAddTostorage';
import {hidenav} from '../../../redux/slice/Slice';
import { useToast } from '../../../../services/hooks/useToast';

export default function Recipe({navigation, route}) {
  const [ingredient, setIngredient] = React.useState([]);
  const { createToast } = useToast()



  const {
    isLoading,
    error,
    isFetching,
    data: mealData,
  } = useQuery('repoData', () => apis.app.allMeals(route?.params?.id));
  const extractedData = mealData?.data?.meals[0];
  console.log(extractedData);

  React.useEffect(() => {
    let initialArray = [];
    if (extractedData) {
      for (const [key, value] of Object.entries(extractedData)) {
        key.includes('strIngredient') && value ? initialArray.push(value) : '';
      }
    }
    setIngredient(initialArray);

  }, [extractedData]);

  const fetchMeals = () => {};

  const addToCart = () => {
    AddtoStorage('@azudi', extractedData);
    createToast({
      action: true,
      status: 'info',
      msg: 'Added to cart successfully',
    });
  };

  return (
    <Template>
      <View style={{height: '100%', backgroundColor: 'white'}}>
        {isFetching ? (
          <View style={style.loading_container}>
            <Loader />
          </View>
        ) : null}
        <View style={[style.image_container, style.box_shadow]}>
          <ImageBackground
            source={{uri: extractedData?.strMealThumb}}
            resizeMode="cover"
            style={[style.box_shadow, {height: '100%'}]}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={{height: '100%'}}
              colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}>
              <Pressable
                style={{padding: 10}}
                onPress={() => navigation.goBack(-1)}>
                <ArrowBack />
              </Pressable>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={{flex: 3}}>
          <ScrollView style={{height: '100%', padding: 15}} alwaysBounce={true}>
            <Text style={style.meal_name}>{extractedData?.strMeal || ''}</Text>
            <View style={style.title_text}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CategoryIcon width={'20px'} color="black" />
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 7,
                    fontFamily: 'RedHatDisplay-Medium',
                  }}>
                  {extractedData?.strCategory || ''}
                </Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <OriginIcon width={'20px'} color="black" />
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 7,
                    fontFamily: 'RedHatDisplay-Medium',
                  }}>
                  {extractedData?.strArea || ''}
                </Text>
              </View>
            </View>

            <View>
              <Text style={style.procedure_header}>
                Procedure for preparation
              </Text>
              <Text style={{paddingTop: 6, fontFamily: 'RedHatDisplay-Medium'}}>
                {extractedData?.strInstructions || ''}
              </Text>
            </View>

            <View>
              <Text style={style.procedure_header}>Ingredient</Text>
              {ingredient.map((item, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      width: '100%',
                      paddingTop: 4,
                      fontFamily: 'RedHatDisplay-Medium',
                    }}>
                    👉🏼 {item}
                  </Text>
                );
              })}
            </View>

            <View>
              <TouchableOpacity onPress={() => addToCart()}>
                <View
                  style={[
                    style.play_button,
                    {
                      width: '100%',
                      backgroundColor: theme.borderLight,
                      paddingVertical: 10,
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'white',
                      paddingLeft: 7,
                      fontFamily: 'RedHatDisplay-Medium',
                    }}>
                    Add to refrence list
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(extractedData?.strYoutube || '')
                }>
                <View style={style.play_button}>
                  <PlayIcon width={'20px'} color="white" />
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'white',
                      paddingLeft: 7,
                      fontFamily: 'RedHatDisplay-Medium',
                    }}>
                    Watch Video
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Template>
  );
}

export const style = StyleSheet.create({
  image_container: {
    flex: 2,
    borderBottomEndRadius: 50,
    overflow: 'hidden',
    borderBottomLeftRadius: 50,
  },
  box_shadow: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
    zIndex: 999,
    shadowRadius: 3,
    // background color must be set
    backgroundColor: '#000', // invisible color
  },
  meal_name: {
    fontSize: 25,
    width: '100%',
    fontFamily: 'RedHatDisplay-Black',
  },
  title_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
    alignItems: 'center',
  },
  procedure_header: {
    fontSize: 17,
    width: '100%',
    paddingTop: 20,
    opacity: 0.7,
    fontFamily: 'RedHatDisplay-Black',
  },
  play_button: {
    flexDirection: 'row',
    width: 150,
    borderRadius: 50,
    marginTop: 24,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.dark_background,
    marginBottom: 24,
  },
  loading_container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: 998,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
