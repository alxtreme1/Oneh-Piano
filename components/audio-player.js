import React, { useRef } from 'react';
// import { Player } from '@react-native-community/audio-toolkit';

const SoundPlayer = ({ audioPath }) => {
  const audioPlayerRef = useRef(null);

  const loadAudio = () => {
    if (!audioPlayerRef.current) {
      audioPlayerRef.current = new Player(audioPath, {
        autoDestroy: false,
      });
      audioPlayerRef.current.prepare((err) => {
        if (err) {
          console.log('Erro ao carregar o arquivo de áudio:', err);
        } else {
          console.log('Arquivo de áudio carregado com sucesso!');
        }
      });
    }
  };

  const playAudio = () => {
    // loadAudio(); // Load the audio before playing
    clearInterval(fadeOutTimer);
    audioPlayerRef.current = new Player(audioPath);
    audioPlayerRef.current.volume = 1;

    if (audioPlayerRef.current) {
      audioPlayerRef.current.play((err) => {
        if (err) {
          console.log('Erro ao reproduzir o áudio:', err);
        } else {
          console.log('Áudio reproduzido com sucesso!');
        }
      });
    }
  };

  const stopAudio = () => {
    if (audioPlayerRef.current) {
      fadeOut();
      console.log('Áudio parado.');
    }
  };

  let fadeOutTimer;

  const fadeOut = () => {
    const fadeOutDuration = 1200;
    const fadeOutInterval = 100;
  
    const initialVolume = audioPlayerRef.current.volume;
    const volumeSteps = Math.floor(fadeOutDuration / fadeOutInterval);
    const volumeStep = initialVolume / volumeSteps;
  
    let currentVolume = initialVolume;
  
    fadeOutTimer = setInterval(() => {
      currentVolume -= volumeStep;
      if(audioPlayerRef.current)
        audioPlayerRef.current.volume = currentVolume;
      
      // caso repitamos parte do final varias vezes para prolongar a nota, 
      // podemos ver se o audio acabou o tempo de reprodução, para encerrar o fadeOut para esse ciclo
      // onde podemos continuar no outro, até o volume chegar a 0
      // if (currentVolume <= 0 || !audioPlayerRef.current.isPlaying) {
      if (currentVolume <= 0) {
        clearInterval(fadeOutTimer);
        audioPlayerRef.current.stop();
      }
    }, fadeOutInterval);
  };

  return { playAudio, stopAudio };
};

export default SoundPlayer;