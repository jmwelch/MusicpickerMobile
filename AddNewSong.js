import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList,
  TextInput
} from 'react-native';

const Realm = require('realm');

export default class AddNewSong extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      realm: props.realm,
      title: null,
      artist: null,
      key: null,
      lyrics: null
    }
  }

  submitForm = () => {
    this.state.realm.write(() => {
      const new_song = this.state.realm.create('Song', {
        title: this.state.title,
        artist: this.state.artist,
        key: this.state.key,
        lyrics: this.state.lyrics,
      });
    });

    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowInput}>
          <Text>
            Title
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Title"
            value={this.state.title}
            onChangeText={(text) => this.setState({title: text})}
          />
        </View>
        <View style={styles.rowInput}>
          <Text>
            Artist
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Artist"
            value={this.state.artist}
            onChangeText={(text) => this.setState({artist: text})}
          />
        </View>
        <View style={styles.rowInput}>
          <Text>
            Key
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Key"
            value={this.state.key}
            onChangeText={(text) => this.setState({key: text})}
          />
        </View>
        <View style={styles.rowInput}>
          <Text>
            Lyrics
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Lyrics"
            value={this.state.lyrics}
            onChangeText={(text) => this.setState({lyrics: text})}
          />
        </View>
        <Button
          title="Submit"
          onPress={this.submitForm}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 30,
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'flex-start'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  rowInput: {
    marginBottom: 10
  }
});
