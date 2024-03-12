import React from 'react';
import Textpart from './components/Textpart';
import Images from './components/Images';
import Header from './components/Header';
import Button from'./components/Button';


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Images/>
      <Textpart/>
      <Button/>
    </div>
  );
};
