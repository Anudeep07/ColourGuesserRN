import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, Button, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>      

        <View style={styles.top}>
          <Text style={styles.titleText}>Colour Guesser</Text>
          <Text style={styles.questionText}>RGB (120, 40, 170)</Text>  
        </View>

        <View style={styles.bottom}>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </View>             

        <View style={styles.restart}>
          <Button title='Restart'/>
        </View> 

        {/* <View style={[styles.container, styles.flexContainer]}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View> */}

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    paddingTop: 40,
    height: '70%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  questionText: {
    paddingTop: 20,
    fontSize: 20
  },
  square: {
    width: '40%',
    height: '40%',
    margin: '5%',
    backgroundColor: 'grey'
  },
  restart: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});