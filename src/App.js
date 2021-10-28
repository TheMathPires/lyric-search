import React, {useState, createRef} from 'react';
import {Wrapper, Button, Title, Lyrics} from './styles';
import axios from "axios";
import ArtistInput from './components/ArtistInput';
import MusicInput from './components/MusicInput';

function App() {
  const artistInput = createRef();
  const musicInput = createRef();
  const [lyricsArea, setLyric] = useState('Search for your favorite lyric!');

  const api = axios.create ({
    baseURL: 'https://api.lyrics.ovh/v1'
  })

  const getLyrics = async ({artist, music}) => {
    const {data} = await api.get(`/${artist}/${music}`);
    return data.lyrics;
  }

  const handleOnSearch = async () => {
    const lyrics =  await getLyrics({artist: artistInput.current.value, music: musicInput.current.value});
    setLyric(lyrics);
    return lyrics;
  }
  
  return (
    <Wrapper>
      <Title>Lyric Search</Title>
      <ArtistInput artist={artistInput}/>
      <MusicInput music={musicInput}/> 
      <Button type="submit" onClick={handleOnSearch}>Search</Button>
      <hr/>
      <Lyrics>{lyricsArea}</Lyrics>
    </Wrapper>
  );
}

export default App;