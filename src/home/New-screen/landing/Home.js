import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  Button,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Image from 'react-native-scalable-image';
import {theme} from '../../../theme';
import {landing} from '../styles/landing';
import {SCR_HEIGHT, SCR_WIDTH, TEST} from '../../../utils';
import { useToast } from '../../../services/hooks/useToast';
import { useOrientation } from '../../../services/hooks/orientation';

export default function Home({navigation}) {
  const { orientation, isPortrait } = useOrientation()

  const [carouselImage, setCarouselimage] = useState([
    require('../../../../assets/img/kindpng_2142431.png'),
    require('../../../../assets/img/Burger-Transparent-PNG.png'),
    require('../../../../assets/img/true-food-kitchen-35.png'),
  ]);

  //FUNCTION
  const signInFunction = () => {
    navigation.navigate('homepage');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={landing.image_contaoiner}>
          <View style={[style.image_part, { flex: isPortrait() ? 6 : null}]}>
            <Carousel
              loop
              width={SCR_WIDTH}
              height={SCR_HEIGHT / 2}
              autoPlay={false}
              pagingEnabled={true}
              snapEnabled={true}
              autoPlayInterval={3000}
              data={[...new Array(3).keys()]}
              scrollAnimationDuration={1000}
              onSnapToItem={index => console.log('current index:', index)}
              renderItem={({index}) => {
                let source = carouselImage[index];
                return (
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                                  <Text>{TEST}</Text>
                    <Image
                      width={250}
                      source={carouselImage[index]}></Image>
                    {/* <Text>{source}</Text> */}
                  </View>
                );
              }}
            />
          </View>

          <View style={[style.text_part, {padding: 15, flex: isPortrait() ? 4 : null}]}>
            <Text style={style.header_text}>Gaspy resort food recipe </Text>
            <Text style={style.plain_text}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Text>

            <Pressable onPress={signInFunction} style={style.button}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'RedHatDisplay-Medium',
                }}>
                {' '}
                Welcome, to Explore
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  image_part: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text_part: {
    justifyContent: 'center',
  },
  header_text: {
    width: '100%',
    fontSize: 22,
    color: theme.white,
    paddingBottom: 10,
    fontFamily: 'RedHatDisplay-Black',
  },
  plain_text: {
    fontWeight: 'normal',
    color: theme.white,
    width: '100%',
    textAlign: 'left',
    fontFamily: 'RedHatDisplay-Medium',
  },
  button: {
    width: '90%',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: '5%',
    borderRadius: 50,
    marginTop: '10%',
    fontFamily: 'RedHatDisplay-Medium',
  },
});
