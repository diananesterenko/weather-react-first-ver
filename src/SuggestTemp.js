import React from "react";
import './App.css'

export default function SuggestTemp(props) {
    return(
     <span className='suggestTemp'>  {props.value} °C</span>
    )
}