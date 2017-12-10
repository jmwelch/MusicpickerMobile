/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component<{}> {

  editPressed = () => {

  }

  startPressed = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the MusicPicker!
        </Text>
        <Text style={styles.instructions}>
          Would you like to:
        </Text>
        <Button
          title='Edit your songs'
          onPress={() => { this.editPressed() }}
        />
        <Text style={[styles.instructions, styles.or]}>
          or
        </Text>
        <Button
          title='Start Picking'
          onPress={() => { this.startPressed() }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
    marginTop: 30
  },
  or: {
    marginBottom: 0,
    marginTop: 0
  }
});
