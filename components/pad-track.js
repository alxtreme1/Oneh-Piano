import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Tile from './tile';
// import { SoundPlayersContext } from '../context/sounds-context'

const styles = StyleSheet.create({
    padTrack: {
        flexDirection: "row",
        height: '100%'
    }
});

export default function(props) {
    const notes = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];
    // const { defaultOctavaKeysNum } = useContext(SoundPlayersContext);
    // const speed = Math.pow(2, props.pad - defaultOctavaKeysNum);

    return(
        <View style={styles.padTrack}>
            <Tile keyNote={ notes[0] } speed={ props.speed } />
            <Tile keyNote={ notes[1] } speed={ props.speed } marginOffset={-15} />
            <Tile keyNote={ notes[2] } speed={ props.speed } />
            <Tile keyNote={ notes[3] } speed={ props.speed } marginOffset={15} />
            <Tile keyNote={ notes[4] } speed={ props.speed } />
            <Tile keyNote={ notes[5] } speed={ props.speed } />
            <Tile keyNote={ notes[6] } speed={ props.speed } marginOffset={-30} />
            <Tile keyNote={ notes[7] } speed={ props.speed } />
            <Tile keyNote={ notes[8] } speed={ props.speed } marginOffset={0} />
            <Tile keyNote={ notes[9] } speed={ props.speed } />
            <Tile keyNote={ notes[10] } speed={ props.speed } marginOffset={30} />
            <Tile keyNote={ notes[11] } speed={ props.speed } />
        </View>
    );
}