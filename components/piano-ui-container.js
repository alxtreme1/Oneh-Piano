import React, {useContext, useState, useRef} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PianoRoll from './piano-roll';
import Slider from './scroll-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      flexGrow: 1
    }
  });

export default function PianoUI(){

  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Slider/>
          <PianoRoll/>
        </View>
    </GestureHandlerRootView>
  );
}