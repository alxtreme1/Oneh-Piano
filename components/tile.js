import React, { useContext } from 'react';
import {
  View,
} from 'react-native';
import SoundPlayer from './audio-player';
import newStyles from '../styles/tiles-style';
import { SoundPlayersContext } from '../context/sounds-context';
import { Player } from '@react-native-community/audio-toolkit';
import Sound from 'react-native-sound';


export default function Tile(props) {
    const styles = newStyles(props.marginOffset);
    const { soundPlayers } = useContext(SoundPlayersContext);
    const player = soundPlayers[props.keyNote];

    const setSpeed = async () => {
      await player.setSpeed(props.speed);
    }

    const setPitch = async () => {
      await player.setPitch(props.speed);
    }

    const handlePlay = () => {
      setSpeed();
      setPitch();
      player.setCurrentTime(0);
      player.play();
    };

    const handleStop = () => {
        // player.stop();
    };

    return(
        <View
            style={props.marginOffset != null ? styles.blackPianoTile : styles.whitePianoTile} 
            onTouchStart={ handlePlay } 
            onTouchEnd={ handleStop } />
    );
}