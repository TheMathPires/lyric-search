import React, {useState, createRef} from 'react';
import {Wrapper, Button, Title, Lyrics} from './styles';
import axios from "axios";
import ArtistInput from './components/ArtistInput';
import MusicInput from './components/MusicInput';

function App() {
  const artistInput = createRef();
  const musicInput = createRef();
  const [lyricsArea, setLyric] = useState('Search for your favorite lyric!');

  const steps = ['First, write the song name', 'And the artist', 'Here is the lyrics'];
  const [activeStep, setActiveStep] = useState(0);
  const [musicValue, setMusicValue] = useState('');
  const [isLoading, setLoading] = useState(false);

  const api = axios.create ({
    baseURL: 'https://api.lyrics.ovh/v1'
  })

  const getLyrics = async ({artist, music}) => {
    try {
      const {data} = await api.get(`/${artist}/${music}`);
      return data.lyrics;
    }
    catch(error) {
      console.log(error);
    }
  }

  const handleOnSearch = async () => {
    setLoading(true);
    setActiveStep(activeStep + 1);

    const lyrics =  await getLyrics({music: musicValue, artist: artistInput.current.value});

    if (lyrics) {
      setLoading(false);
      setLyric(lyrics);
      return lyrics;
    } else {
      setLoading(false);
      setLyric('Lyrics not found :(');
    }
  }

  const handleNextStep = () => {
    setMusicValue(musicInput.current.value);
    setActiveStep(activeStep + 1);
    return musicValue;
  }

  const handleBackStep = () => {
    setActiveStep(0);
    setLyric('Search for your favorite lyric!');
  }
  
  return (
    <Wrapper>
      <Title>Lyric Search</Title>

      {activeStep === 2 &&
        <div>
          <Button onClick={handleBackStep}>Restart</Button>
        </div>
      }

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

      <hr/>

      {isLoading &&
        <p>Loading...</p>
      }

      <Lyrics>{lyricsArea}</Lyrics>
      
    </Wrapper>
  );
}

export default App;