import React from 'react';
import './paragraph.css';

export function Paragraph(props){
    const  myVariable = "Das ist der Inhalt einer Variable"
    return (<p className="paragraph"> { props.text} </p>);
}
