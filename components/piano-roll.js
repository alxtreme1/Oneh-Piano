import React, { useRef, useContext, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import PadTrack from './pad-track';
import { CameraTargetContext } from '../context/piano-track-context';
import { SoundPlayersProvider } from '../context/sounds-context';

const styles = StyleSheet.create({
    pianoRoll: {
        flexDirection:'row',
    },
    container: {
        flex: 1
    }
});

export default function() {
    const { sliderValue } = useContext(CameraTargetContext);
    const { setCameraTarget } = useContext(CameraTargetContext);
    const { pianoWidth, setPianoWidth}  = useContext(CameraTargetContext);
    const { sliderWidth } = useContext(CameraTargetContext);
    const { setThumbWidth } = useContext(CameraTargetContext);
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


    return(
        <SoundPlayersProvider>
            <ScrollView
                ref={ scrollViewRef }
                style={ styles.container } 
                horizontal={true}
                scrollEnabled={false}
                onLayout={ handleScrollLayout }
                > 
                <View
                    style={ styles.pianoRoll }
                    onLayout={ handlePianoLayout }>
                    <PadTrack speed={0.25} pad={1}/>
                    <PadTrack speed={0.5} pad={2}/>
                    <PadTrack speed={1} pad={3}/>
                    <PadTrack speed={2} pad={4}/>
                    <PadTrack speed={4} pad={5}/>
                </View>
            </ScrollView>
        </SoundPlayersProvider>
    );
}