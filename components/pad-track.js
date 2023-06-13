import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Tile from './tile';

const styles = StyleSheet.create({
    padTrack: {
        flexDirection: "row",
        height: '100%'
    }
});

export default function(props) {
    // const speed = Math.pow(2, props.pad - defaultOctavaKeysNum);

    return(
        <View style={styles.padTrack}>
            <Tile pad={props.pad} keyNote={ props.notes[0] } speed={ props.speed } />
            <Tile pad={props.pad} keyNote={ props.notes[1] } speed={ props.speed } marginOffset={-15} />
            <Tile pad={props.pad} keyNote={ props.notes[2] } speed={ props.speed } />
            <Tile pad={props.pad} keyNote={ props.notes[3] } speed={ props.speed } marginOffset={15} />
            <Tile pad={props.pad} keyNote={ props.notes[4] } speed={ props.speed } />
            <Tile pad={props.pad} keyNote={ props.notes[5] } speed={ props.speed } />
            <Tile pad={props.pad} keyNote={ props.notes[6] } speed={ props.speed } marginOffset={-30} />
            <Tile pad={props.pad} keyNote={ props.notes[7] } speed={ props.speed } />
            <Tile pad={props.pad} keyNote={ props.notes[8] } speed={ props.speed } marginOffset={0} />
            <Tile pad={props.pad} keyNote={ props.notes[9] } speed={ props.speed } />
            <Tile pad={props.pad} keyNote={ props.notes[10] } speed={ props.speed } marginOffset={30} />
            <Tile pad={props.pad} keyNote={ props.notes[11] } speed={ props.speed } />
        </View>
    );
}