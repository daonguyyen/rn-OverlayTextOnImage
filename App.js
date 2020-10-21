import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {IMAGE} from './src/constants/images'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let {container, imageStyle, textStyle, viewTextStyle} = styles;
    return (
      <View style={container}>
        <Image 
          source={IMAGE.ICON_CIRCLE}
          style={imageStyle}
        />
        <View style={viewTextStyle}>
          <Text style={textStyle}>{'Text Demo'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: 200,
    height: 200
  },
  viewTextStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  }
})
