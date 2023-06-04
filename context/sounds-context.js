import React, { createContext, useEffect, useState } from 'react';
import { Player } from '@react-native-community/audio-toolkit';
import Sound from 'react-native-sound';

const SoundPlayersContext = createContext();

const SoundPlayersProvider = ({ children }) => {
  const [soundPlayers, setSoundPlayers] = useState({});
  const defaultOctavaKeysNum = 3;

  useEffect(() => {
      const loadSoundPlayers = () => {
        const options = {
          autoDestroy: false,
          mixWithOthers: true
        };
        const soundPlayerPromises = {
          "c": new Sound(require('../android/app/src/main/res/raw/audio/c3.mp3')),
          "db": new Sound(require('../android/app/src/main/res/raw/audio/db3.mp3')),
          "d": new Sound(require('../android/app/src/main/res/raw/audio/d3.mp3')),
          "eb": new Sound(require('../android/app/src/main/res/raw/audio/eb3.mp3')),
          "e": new Sound(require('../android/app/src/main/res/raw/audio/e3.mp3')),
          "f": new Sound(require('../android/app/src/main/res/raw/audio/f3.mp3')),
          "gb": new Sound(require('../android/app/src/main/res/raw/audio/gb3.mp3')),
          "g": new Sound(require('../android/app/src/main/res/raw/audio/g3.mp3')),
          "ab": new Sound(require('../android/app/src/main/res/raw/audio/ab3.mp3')),
          "a": new Sound(require('../android/app/src/main/res/raw/audio/a3.mp3')),
          "bb": new Sound(require('../android/app/src/main/res/raw/audio/bb3.mp3')),
          "b": new Sound(require('../android/app/src/main/res/raw/audio/b3.mp3'))
        };

        const loadedSoundPlayers = {};

        for (const [noteName, soundPlayerPromise] of Object.entries(soundPlayerPromises)) {
            loadedSoundPlayers[noteName] = soundPlayerPromise;
        //   soundPlayerPromise.prepare(() => {
        //     console.log(`Successfully loaded sound player for note ${noteName}`);
        //     soundPlayerPromise.play();
        //   }, (error) => {
        //     console.log(`Error loading sound player for note ${noteName}:`, error);
        //   });
        //   loadedSoundPlayers[noteName] = soundPlayerPromise;
        }

        setSoundPlayers(loadedSoundPlayers);
      };

      loadSoundPlayers();
  }, []);

  return (
    <SoundPlayersContext.Provider value={{soundPlayers, defaultOctavaKeysNum}}>
      {children}
    </SoundPlayersContext.Provider>
  );
};

export { SoundPlayersContext, SoundPlayersProvider };