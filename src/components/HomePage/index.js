import React from 'react';
import Card from '../Card/';
import Direita from '../Card/direita';
import Left from '../Card/esquerda';

export default function HomePage() {
  return (
    <div className = "homePage">
      <Left />
      <Card />
      <Direita />
    </div>
  );
}