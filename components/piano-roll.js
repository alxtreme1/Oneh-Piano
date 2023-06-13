import React, { useRef, useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import PadTrack from './pad-track';
import { CameraTargetContext } from '../context/piano-track-context';
import { SoundPlayersProvider } from '../context/sounds-context';
// import { IOScrollView, InView } from 'react-native-intersection-observer'
import { GestureHandlerRootView, PanGestureHandler, GestureDetector, Gesture } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    pianoRoll: {
        flexDirection:'row',
    },
    container: {
        flex: 1
    }
});

export default function() {
    const { sliderValue, setSliderValue } = useContext(CameraTargetContext);
    const { setCameraTarget } = useContext(CameraTargetContext);
    const { pianoWidth, setPianoWidth}  = useContext(CameraTargetContext);
    const { sliderWidth } = useContext(CameraTargetContext);
    const { thumbWidth, setThumbWidth } = useContext(CameraTargetContext);
    const { setMaximumValue } = useContext(CameraTargetContext);
    
    const scrollViewRef = useRef(null);
    const [contentWidth, setContentWidth] = React.useState(0);
    
    const handlePianoLayout = ({nativeEvent}) => {
        let windowWidth = Dimensions.get('window').width;
        let screenPianoProportion = windowWidth / nativeEvent.layout.width;
        setMaximumValue(1-screenPianoProportion);
        setPianoWidth(nativeEvent.layout.width);
        setThumbWidth(screenPianoProportion * sliderWidth);

        const { width } = nativeEvent.layout;
        setContentWidth(width);
    };

    const handleScrollLayout = () => {
        const centerPosition = (contentWidth - Dimensions.get('window').width) / 2;
        scrollViewRef.current.scrollTo({x: centerPosition, animated: false });
    }

    useEffect(() => {
        setCameraTarget(sliderValue * pianoWidth);
        scrollViewRef.current.scrollTo({ x: sliderValue * pianoWidth, animated: false });
    }, [sliderValue]);

    const autoSliding = useState(false);
    
    const handlePanGesture = (e) => {
        const { nativeEvent } = e;
        const widthUnit = pianoWidth / 5;
        const xPos = nativeEvent.absoluteX;

        const newSliderValue = (xPos - thumbWidth / 2) / sliderWidth;

        autoSliding == true ? setSliderValue(newSliderValue) : console.log(nativeEvent.x);
    };
    
    const notes2 = ['c2', 'db2', 'd2', 'eb2', 'e2', 'f2', 'gb2', 'g2', 'ab2', 'a2', 'bb2', 'b2'];
    const notes3 = ['c3', 'db3', 'd3', 'eb3', 'e3', 'f3', 'gb3', 'g3', 'ab3', 'a3', 'bb3', 'b3'];
    const notes4 = ['c4', 'db4', 'd4', 'eb4', 'e4', 'f4', 'gb4', 'g4', 'ab4', 'a4', 'bb4', 'b4'];
    return(
        <SoundPlayersProvider>
            <ScrollView
                ref={ scrollViewRef }
                style={ styles.container } 
                horizontal={true}
                scrollEnabled={false}
                onLayout={ handleScrollLayout }
                > 
                <PanGestureHandler onGestureEvent={handlePanGesture}>
                    <View
                        style={ styles.pianoRoll }
                        onLayout={ handlePianoLayout } >
                        <PadTrack speed={0.5} pad={1} notes={notes2} />
                        <PadTrack speed={1} pad={2} notes={notes2} />
                        <PadTrack speed={1} pad={3} notes={notes3} />
                        <PadTrack speed={1} pad={4} notes={notes4} />
                        <PadTrack speed={2} pad={5} notes={notes4} />
                    </View>
                </PanGestureHandler>
            </ScrollView>
        </SoundPlayersProvider>
    );
}