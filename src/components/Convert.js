import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

// second useEffect hook to set up for time, runs when text changes
    useEffect(() =>{
        const timerId = setTimeout (() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        //create helper function and mark as async 
        const doTranslation = async () => {
             // installed axios and post request with 2 objects, one emtpy and one w/params
       const { data } =  await axios.post(
           'https://translation.googleapis.com/language/translate/v2',
        {},
         {
           params: {
               q: debouncedText,
               target: language.value,
               key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
           },
       }
       );

       setTranslated(data.data.translations[0].translatedText);
        };
        
       doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;