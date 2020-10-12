import React from 'react'

import { ImageChanger } from './ImageChanger'

const images = [
  {
    'src': 'https://images.freeimages.com/images/large-previews/383/the-home-of-the-candle-1-1425911.jpg',
    'alt': 'house'
  },
  {
    'src': 'https://images.freeimages.com/images/large-previews/540/dandelion-37-1388001.jpg',
    'alt': 'flower'
  },
  {
    'src': 'https://images.freeimages.com/images/large-previews/389/mitze-1380778.jpg',
    'alt': 'cat'
  }
]


export class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {showImageChanger: true};
  }
  /*
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        showImageChanger: false
      });
    }, 3000);
  }
  */
  render(){
    return(
      <ImageChanger images={images} interval={3000} />
    )
    /*
    if(this.state.showImageChanger) {
      return(
        <ImageChanger />
      )
    } else {
      return (
        <h1> Stopped! </h1>
      )
    }
    */
  }
}
