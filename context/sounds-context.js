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
          "c5": new Sound(require('../android/app/src/main/res/raw/audio/c5.mp3')),
          "db5": new Sound(require('../android/app/src/main/res/raw/audio/db5.mp3')),
          "d5": new Sound(require('../android/app/src/main/res/raw/audio/d5.mp3')),
          "eb5": new Sound(require('../android/app/src/main/res/raw/audio/eb5.mp3')),
          "e5": new Sound(require('../android/app/src/main/res/raw/audio/e5.mp3')),
          "f5": new Sound(require('../android/app/src/main/res/raw/audio/f5.mp3')),
          "gb5": new Sound(require('../android/app/src/main/res/raw/audio/gb5.mp3')),
          "g5": new Sound(require('../android/app/src/main/res/raw/audio/g5.mp3')),
          "ab5": new Sound(require('../android/app/src/main/res/raw/audio/ab5.mp3')),
          "a5": new Sound(require('../android/app/src/main/res/raw/audio/a5.mp3')),
          "bb5": new Sound(require('../android/app/src/main/res/raw/audio/bb5.mp3')),
          "b5": new Sound(require('../android/app/src/main/res/raw/audio/b5.mp3'))
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