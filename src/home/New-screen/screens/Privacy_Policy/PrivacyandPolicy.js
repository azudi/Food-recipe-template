import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Divider from '../../modules/widget/Divider';
import Template from '../../Template';
import Bold from './module/Bold';
import TextWrap from './module/TextWrap';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function PrivacyandPolicy() {
  return (
    <Template>
      <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
        <Text
          style={{
            fontFamily: 'RedHatDisplay-Black',
            fontSize: 20,
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Gaspy privacy policy
        </Text>

        <Divider />

        <View style={{padding: 10}}>
          <TextWrap>
            Welcome to <Bold>gaspy</Bold>.
          </TextWrap>
          <TextWrap style={{marginBottom: 10}}>
            <Bold>gaspy</Bold> (“us”, “we”, or “our”) operates gaspy.com
            (hereinafter referred to as “Service”). Our Privacy Policy governs
            your visit to gaspy.com, and explains how we collect, safeguard and
            disclose information that results from your use of our Service. We
            use your data to provide and improve Service. By using Service, you
            agree to the collection and use of information in accordance with
            this policy. Unless otherwise defined in this Privacy Policy, the
            terms used in this Privacy Policy have the same meanings as in our
            Terms and Conditions. Our Terms and Conditions (“Terms”) govern all
            use of our Service and together with the Privacy Policy constitutes
            your agreement with us (“agreement”).
            {'\n'} {'\n'}
          </TextWrap>

          <TextWrap>
            <Bold> Information Collection and Use </Bold> {'\n'} {'\n'}
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
            {'\n'} {'\n'}
          </TextWrap>

          <TextWrap>
            <Bold> Usage Data</Bold>
            {'\n'} {'\n'}
            We may also collect information that your browser sends whenever you
            visit our Service or when you access Service by or through any
            device (“Usage Data”). This Usage Data may include information such
            as your computer’s Internet Protocol address (e.g. IP address),
            browser type, browser version, the pages of our Service that you
            visit, the time and date of your visit, the time spent on those
            pages, unique device identifiers and other diagnostic data. When you
            access Service with a device, this Usage Data may include
            information such as the type of device you use, your device unique
            ID, the IP address of your device, your device operating system, the
            type of Internet browser you use, unique device identifiers and
            other diagnostic data.
            {'\n'} {'\n'}
          </TextWrap>

          <TextWrap>
            <Bold>Retention of Data </Bold> {'\n'} {'\n'}
            We will retain your Personal Data only for as long as is necessary
            for the purposes set out in this Privacy Policy. We will retain and
            use your Personal Data to the extent necessary to comply with our
            legal obligations (for example, if we are required to retain your
            data to comply with applicable laws), resolve disputes, and enforce
            our legal agreements and policies. We will also retain Usage Data
            for internal analysis purposes. Usage Data is generally retained for
            a shorter period, except when this data is used to strengthen the
            security or to improve the functionality of our Service, or we are
            legally obligated to retain this data for longer time periods.
          </TextWrap>
        </View>
      </ScrollView>
    </Template>
  );
}
