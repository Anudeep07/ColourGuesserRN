import React, { Component } from 'react';
import { Alert, StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';

export default class ColourGuesser extends Component { 
  constructor(props) {
    super(props);
    this.state = this.createNewGame();
  }

  createNewGame() {
    var actualRed = Math.floor(Math.random() * 256);
    var actualGreen = Math.floor(Math.random() * 256);
    var actualBlue = Math.floor(Math.random() * 256);
    var actualIndex = Math.floor(Math.random() * 4);
    var actualColours = {red: actualRed, green: actualGreen, blue: actualBlue};

    var squareColours = [];
    for(var i=0 ; i<4 ; i++) {
      if(i == actualIndex) {
        squareColours.push(actualColours);
      } else {
        var randomRed = Math.floor(Math.random() * 256);
        var randomGreen = Math.floor(Math.random() * 256);
        var randomBlue = Math.floor(Math.random() * 256);
        squareColours.push({red: randomRed, green: randomGreen, blue: randomBlue});
      }
    }

    return {
      actualColours: actualColours,
      actualIndex: actualIndex,
      squareColours: squareColours
    };
  }

  onPress(index) {
    if(index == this.state.actualIndex) {
      Alert.alert('Correct!');
      this.setState(this.createNewGame());
    } else {
      var newColours = this.state.squareColours;
      newColours[index].red = newColours[index].green = newColours[index].blue = 255;
      this.setState({squareColours: newColours});
    }
  }
  
  getRGBString(index) {
    return {
      backgroundColor: 'backgroundColor: rgb(' + this.state.squareColours[index].red + ',' + this.state.squareColours[index].green + ',' + this.state.squareColours[index].blue + ')'
    };
  }

  render() {
    return (
      <View style={styles.container}>      

        <View style={styles.top}>
          <Text style={styles.titleText}>Colour Guesser</Text>
          <Text style={styles.questionText}>RGB ({this.state.actualColours.red}, {this.state.actualColours.green}, {this.state.actualColours.blue})</Text>  
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity style={[styles.square, this.getRGBString(0)]} onPress={() => this.onPress(0)}></TouchableOpacity>
          <TouchableOpacity style={[styles.square, this.getRGBString(1)]} onPress={() => this.onPress(1)}></TouchableOpacity>
          <TouchableOpacity style={[styles.square, this.getRGBString(2)]} onPress={() => this.onPress(2)}></TouchableOpacity>
          <TouchableOpacity style={[styles.square, this.getRGBString(3)]} onPress={() => this.onPress(3)}></TouchableOpacity>
        </View>             

        <View style={styles.restart}>
          <Button title='Skip' onPress={() => this.setState(this.createNewGame())}/>
        </View>         
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