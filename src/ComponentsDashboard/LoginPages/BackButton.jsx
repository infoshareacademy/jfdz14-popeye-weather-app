import React from 'react';
import style from './backButton.module.css';
import { useHistory } from 'react-router-dom';


export default function BackButton () {
return <button className= {style.backButton} onClick={ () => {
    history.back()
}}> 
    Back
</button>
 
}

