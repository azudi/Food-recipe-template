import React from 'react'
import {
    View,
    ActivityIndicator
  } from 'react-native';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

export default function Loader() {
  return (
     <View>
        <ActivityIndicator size="large" color="#43c59e" />
     </View>
  )
}
