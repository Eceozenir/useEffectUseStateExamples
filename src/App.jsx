import React, { useEffect, useState } from 'react';
import { SimpleForm } from './useStateExamples/SimpleForm';
import { Toggle } from './useStateExamples/Toggle';
import { Window } from './useEffectExamples/Window';
import { Count } from './useEffectExamples/Count'
import './App.css';


const App = () => {
  return(
    <>
  <h1>useState Örnekleri</h1>
    <h3>useState SimpleForm örneği</h3>
      <SimpleForm />
      <br/>
    <h3>useState Toggle Örneği</h3>
      <Toggle />
      <br/>
    <h1>useEffect Örnekleri</h1>
      <h3>useEffect Window örneği</h3>
      <Window />
      <h3>useEffect Count-Text örneği</h3>
      <Count />
      
    </>
  )
}

export default App;
