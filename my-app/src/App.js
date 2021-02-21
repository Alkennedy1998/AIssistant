import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Avatar from 'avataaars'
import CustomAvatar from './components/CustomAvatar'
import {Piece} from 'avataaars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hey Boisss
      </header>


      <CustomAvatar/>
      <Piece pieceType="mouth" pieceSize="100" mouthType="Eating"/>
        <Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy"/>
        <Piece pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited"/>
        <Piece pieceType="accessories" pieceSize="100" accessoriesType="Round"/>
        <Piece pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red"/>
        <Piece pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic"/>
        <Piece pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red"/>
        <Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
        <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />


    </div>
  );
}

export default App;
