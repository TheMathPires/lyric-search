import React from 'react';
import {Input} from '../styles';

export const ArtistInput = (props) => {
    return (
     <Input type="text" placeholder="Artist" ref={props.artist} />
    );
};

export default ArtistInput;