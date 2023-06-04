import { StyleSheet } from 'react-native';

const BLACK_TILE_WIDTH = 54.2;

const initialStyles = StyleSheet.create({
    blackPianoTile: {
        backgroundColor: '#000',
        height: '61.54%',
        width: BLACK_TILE_WIDTH,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        zIndex: 2,
        cor: 'white'
    },
    whitePianoTile: {
        backgroundColor: '#fff',
        borderWidth: 0.4,
        height: '100%',
        width: 84,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        zIndex: 1,
    },
});

export default function newStyles(marginOffset) {
    const offset = BLACK_TILE_WIDTH * (marginOffset / 100);
    const { blackPianoTile, whitePianoTile } = initialStyles;

    const updatedStyles = StyleSheet.create({
        blackPianoTile: {
        ...blackPianoTile,
        marginLeft: -BLACK_TILE_WIDTH / 2 + offset,
        marginRight: -BLACK_TILE_WIDTH / 2 - offset,
        },
        whitePianoTile,
    });

    return updatedStyles;
}