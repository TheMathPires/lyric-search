import React, {useState, createRef} from 'react';
import {Wrapper, Button, Title, Lyrics} from './styles';
import axios from "axios";
import ArtistInput from './components/ArtistInput';
import MusicInput from './components/MusicInput';

function App() {
  const artistInput = createRef();
  const musicInput = createRef();
  const [lyricsArea, setLyric] = useState('Search for your favorite lyric!');

  const steps = ['First, write the song name', 'And the artist', 'Lyrics'];
  const [activeStep, setActiveStep] = useState(0);
  const [musicValue, setMusicValue] = useState('');

  const api = axios.create ({
    baseURL: 'https://api.lyrics.ovh/v1'
  })

  const getLyrics = async ({artist, music}) => {
    const {data} = await api.get(`/${artist}/${music}`);
    return data.lyrics;
  }

  const handleOnSearch = async () => {
    const lyrics =  await getLyrics({music: musicValue, artist: artistInput.current.value});
    setLyric(lyrics);
    return lyrics;
  }

  const handleNextStep = () => {
    setMusicValue(musicInput.current.value);
    setActiveStep(activeStep + 1);
    return musicValue;
  }
  
  return (
    <Wrapper>
      <Title>Lyric Search</Title>

      <div className="steps">
        {steps[activeStep]}
      </div>

      {activeStep === 0 &&
        <div>
          <MusicInput music={musicInput}/> 
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      }


      {activeStep === 1 &&
        <div>
          <ArtistInput artist={artistInput}/>
          <Button type="submit" onClick={handleOnSearch}>Search</Button>
        </div>
      }

      <Lyrics>{lyricsArea}</Lyrics>

    </Wrapper>
  );
}

export default App;