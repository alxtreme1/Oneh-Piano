import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PianoRoll from './piano-roll';
import Slider from './scroll-bar';
import { CameraTargetContextProvider } from '../context/piano-track-context';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'

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
        <CameraTargetContextProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <PanGestureHandler>
                    <View style={styles.container}>
                        <Slider/>
                        <PianoRoll/>
                    </View>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </CameraTargetContextProvider>
    );
}