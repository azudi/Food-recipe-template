import React, {useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {theme} from '../../../../../theme';
import CustomModal from '../../../modules/widget/CustomModal';

export default function PermitDelete({
  showPermitModal,
  closeModal,
  removeStore,
}) {
  return (
    <CustomModal visible={showPermitModal}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 11,
          width: '95%',
          borderRadius: 10,
        }}>
        <Text style={style.modal_text}>
          Do you want to delete item, these process is irreversble?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Pressable onPress={() => closeModal()}>
            <Text style={[style.button, {backgroundColor: 'red'}]}>No</Text>
          </Pressable>
          <Pressable onPress={() => removeStore()}>
            <Text
              style={[style.button, {backgroundColor: theme.dark_background}]}>
              Yes
            </Text>
          </Pressable>
        </View>
      </View>
    </CustomModal>
  );
}

const style = StyleSheet.create({
  modal_text: {
    fontFamily: 'RedHatDisplay-Black',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 7,
    marginVertical: 12,
    borderRadius: 5,
    marginRight: 12,
    fontFamily: 'RedHatDisplay-Black',
    color: 'white',
  },
});
