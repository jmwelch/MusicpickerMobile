/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import SongsIndex from './SongsIndex';

const Realm = require('realm');

export default class Homepage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [{
        name: 'Song',
        properties: {
          title: 'string',
          artist: 'string',
          key: 'string',
          lyrics: 'string'
        }
      }]
    }).then(realm => {
      this.setState({ realm });
    });
  }

  editPressed = () => {
    this.props.navigator.push({
      title: 'View All',
      component: SongsIndex,
      passProps: {
        realm: this.state.realm,
        //songs: this.state.realm.objects('Song')
      }
    });
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
    marginTop: 30,
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
