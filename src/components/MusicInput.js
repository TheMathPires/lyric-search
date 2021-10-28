import React from 'react';
import {Input} from '../styles';

function MusicInput(props) {
    return (  
        <Input type="text" placeholder="Artist" ref={props.music} />
    );
}

export default MusicInput;