import React, {useState} from 'react';
import { Wrapper, Input, Button, Title, Lyrics } from './styles';
import axios from "axios";

function App() {
  const artistInput = React.createRef();
  const musicInput = React.createRef();
  const [lyricsArea, setLyric] = useState('Search for your favorite lyric!');

  const api = axios.create ({
    baseURL: 'https://api.lyrics.ovh/v1'
  })

  const getLyrics = async ({artist, music}) => {
    const {data} = await api.get(`/${artist}/${music}`);
    
    data.lyrics.split("\n").map(function(item) { 
      console.log(item);
    })
    
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
      <Input type="text" placeholder="Artist" ref={artistInput}/>
      <Input type="text" placeholder="Music" ref={musicInput}/> 
      <br/><br/>
      <Button type="submit" onClick={handleOnSearch}>Search</Button>
      <hr/>
      <Lyrics>{lyricsArea}</Lyrics>
    </Wrapper>
  );
}

export default App;