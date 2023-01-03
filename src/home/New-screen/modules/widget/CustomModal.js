import React, { useMemo } from 'react'
import { Modal, View, Text, ScrollView, StyleSheet } from 'react-native';
import { useOrientation } from '../../../../services/hooks/orientation';
import { SCR_HEIGHT, SCR_WIDTH } from '../../../../utils';

export default function CustomModal({visible, children}) {

 const showmodal = useMemo(() => checkModalchange(visible), [visible]);

 const { isPortrait } = useOrientation()

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={showmodal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >

        <ScrollView style={style.modal_container}>
          <View style={[style.inner_container, { height: isPortrait()? SCR_HEIGHT : SCR_WIDTH}]}>
              {children}
          </View>
        </ScrollView>
      </Modal>
  )
}

 const checkModalchange = (val)=>{
   return val
}

const style =  StyleSheet.create({
  modal_container: {
    width: '100%', 
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  inner_container: {
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center'
  }
})
