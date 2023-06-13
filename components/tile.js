import React, { useContext } from 'react';
import {
  View,
} from 'react-native';
import newStyles from '../styles/tiles-style';
import { SoundPlayersContext } from '../context/sounds-context';
import { TapGestureHandler } from 'react-native-gesture-handler';


export default function Tile(props) {
    const styles = newStyles(props.marginOffset);
    const { playNote, stopNote, tilesRefs } = useContext(SoundPlayersContext);
    const keyNote = props.keyNote;

    const handlePlay = (e) => {
      const state = e.nativeEvent.state;
      console.log(state);
      if(state == 2)
        playNote(keyNote, props.speed)
      else if(state == 5 || state == 3) {
        handleStop();
      }
    };

    const handleStop = () => {
        // stopNote(keyNote);
    };

    return(
      <TapGestureHandler onBegan={handlePlay} onEnded={handleStop}>
        <View style={props.marginOffset != null ? styles.blackPianoTile : styles.whitePianoTile} />
      </TapGestureHandler>
    );
}