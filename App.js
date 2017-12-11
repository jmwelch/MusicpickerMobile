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
  NavigatorIOS
} from 'react-native';
import Homepage from './Homepage';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Musicpicker',
          component: Homepage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
