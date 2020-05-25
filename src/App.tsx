import './App.css';
import Carousel, { CarouselStyles } from 'react-images';

import React, { Component, ReactNode } from 'react';

import { Display } from './container/Display';
import { Textbox } from './container/Textbox';
import logo from './logo.png';
import { Paragraph } from './component/Paragraph';
const images = [{ source: 'images/animal_shika_jump2.png' }, { source: 'images/animal_stand_ookami.png' },  { source: 'images/eto_uma.png' }];
const customStyles: CarouselStyles = {
  footer: base => ({
    ...base,
    background: 'none !important',
    color: '#666',
    padding: 0,
    paddingTop: 20,
    position: 'static',

    '& a': {
      color: 'black',
    },
  }),
  header: base => ({
    ...base,
    background: 'none !important',
    padding: 0,
    paddingBottom: 10,
    position: 'static',
  }),
  headerClose: base => ({
    ...base,
    color: '#666',

    ':hover': { color: '#DE350B' },
  }),
  view: base => ({
    ...base,
    maxHeight: 480,
    overflow: 'hidden',
  }),
}

type Props = Readonly<{}>;
type State = Readonly<{}>;

export class App extends Component<Props, State> {
  public render(): ReactNode {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Paragraph text="あなたの名前を入力してください"/>
          <Textbox />
          <Display />
          <Carousel styles={customStyles} views={images} />
        </header>
      </div>
    );
  }
}
