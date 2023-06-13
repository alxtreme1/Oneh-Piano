import React, { createContext, useEffect, useState } from 'react';
import { Player } from '@react-native-community/audio-toolkit';
import Sound from 'react-native-sound';

const SoundPlayersContext = createContext();

const SoundPlayersProvider = ({ children }) => {
  const [soundPlayers, setSoundPlayers] = useState({});
  const defaultOctavaKeysNum = 3;

  useEffect(() => {
      const loadSoundPlayers = () => {
        const soundPlayerPromises = {
          "c2": new Sound(require('../android/app/src/main/res/raw/audio/c2.mp3')),
          "db2": new Sound(require('../android/app/src/main/res/raw/audio/db2.mp3')),
          "d2": new Sound(require('../android/app/src/main/res/raw/audio/d2.mp3')),
          "eb2": new Sound(require('../android/app/src/main/res/raw/audio/eb2.mp3')),
          "e2": new Sound(require('../android/app/src/main/res/raw/audio/e2.mp3')),
          "f2": new Sound(require('../android/app/src/main/res/raw/audio/f2.mp3')),
          "gb2": new Sound(require('../android/app/src/main/res/raw/audio/gb2.mp3')),
          "g2": new Sound(require('../android/app/src/main/res/raw/audio/g2.mp3')),
          "ab2": new Sound(require('../android/app/src/main/res/raw/audio/ab2.mp3')),
          "a2": new Sound(require('../android/app/src/main/res/raw/audio/a2.mp3')),
          "bb2": new Sound(require('../android/app/src/main/res/raw/audio/bb2.mp3')),
          "b2": new Sound(require('../android/app/src/main/res/raw/audio/b2.mp3')),

          "c3": new Sound(require('../android/app/src/main/res/raw/audio/c3.mp3')),
          "db3": new Sound(require('../android/app/src/main/res/raw/audio/db3.mp3')),
          "d3": new Sound(require('../android/app/src/main/res/raw/audio/d3.mp3')),
          "eb3": new Sound(require('../android/app/src/main/res/raw/audio/eb3.mp3')),
          "e3": new Sound(require('../android/app/src/main/res/raw/audio/e3.mp3')),
          "f3": new Sound(require('../android/app/src/main/res/raw/audio/f3.mp3')),
          "gb3": new Sound(require('../android/app/src/main/res/raw/audio/gb3.mp3')),
          "g3": new Sound(require('../android/app/src/main/res/raw/audio/g3.mp3')),
          "ab3": new Sound(require('../android/app/src/main/res/raw/audio/ab3.mp3')),
          "a3": new Sound(require('../android/app/src/main/res/raw/audio/a3.mp3')),
          "bb3": new Sound(require('../android/app/src/main/res/raw/audio/bb3.mp3')),
          "b3": new Sound(require('../android/app/src/main/res/raw/audio/b3.mp3')),

          "c4": new Sound(require('../android/app/src/main/res/raw/audio/c4.mp3')),
          "db4": new Sound(require('../android/app/src/main/res/raw/audio/db4.mp3')),
          "d4": new Sound(require('../android/app/src/main/res/raw/audio/d4.mp3')),
          "eb4": new Sound(require('../android/app/src/main/res/raw/audio/eb4.mp3')),
          "e4": new Sound(require('../android/app/src/main/res/raw/audio/e4.mp3')),
          "f4": new Sound(require('../android/app/src/main/res/raw/audio/f4.mp3')),
          "gb4": new Sound(require('../android/app/src/main/res/raw/audio/gb4.mp3')),
          "g4": new Sound(require('../android/app/src/main/res/raw/audio/g4.mp3')),
          "ab4": new Sound(require('../android/app/src/main/res/raw/audio/ab4.mp3')),
          "a4": new Sound(require('../android/app/src/main/res/raw/audio/a4.mp3')),
          "bb4": new Sound(require('../android/app/src/main/res/raw/audio/bb4.mp3')),
          "b4": new Sound(require('../android/app/src/main/res/raw/audio/b4.mp3'))
        };

        const loadedSoundPlayers = {};

        for (const [noteName, soundPlayerPromise] of Object.entries(soundPlayerPromises))
            loadedSoundPlayers[noteName] = soundPlayerPromise;

        setSoundPlayers(loadedSoundPlayers);
      };

      loadSoundPlayers();
  }, []);

  const setSpeed = async (keyNote, speed) => {
    await soundPlayers[keyNote].setSpeed(speed);
  }

  const setPitch = async (keyNote, pitch) => {
    await soundPlayers[keyNote].setPitch(pitch);
  }

  const playNote = (keyNote, speed) => {
    setSpeed(keyNote, speed);
    setPitch(keyNote, speed);
    soundPlayers[keyNote].setCurrentTime(0);
    soundPlayers[keyNote].play();
  };

  const stopNote = (keyNote) => {
      soundPlayers[keyNote].stop();
  };

  return (
    <SoundPlayersContext.Provider value={{soundPlayers, defaultOctavaKeysNum, playNote, stopNote}}>
      {children}
    </SoundPlayersContext.Provider>
  );
};

export { SoundPlayersContext, SoundPlayersProvider };