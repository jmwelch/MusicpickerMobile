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
      lyrics: null,

      title_error: null,
      artist_error: null,
      key_error: null,
      lyrics_error: null,
    }
  }

  submitForm = () => {
    if (this.validate()) {
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
  }

  validate = () => {
    var isValid = true
    if (this.state.title == null) {
      this.setState({title_error: "Cannot be blank"})
      isValid = false
    } else {
      this.setState({title_error: null})
    }
    if (this.state.artist == null) {
      this.setState({artist_error: "Cannot be blank"})
      isValid = false
    } else {
      this.setState({artist_error: null})
    }
    if (this.state.key == null) {
      this.setState({key_error: "Cannot be blank"})
      isValid = false
    } else {
      this.setState({key_error: null})
    }
    if (this.state.lyrics == null) {
      this.setState({lyrics_error: "Cannot be blank"})
      isValid = false
    } else {
      this.setState({lyrics_error: null})
    }

    return isValid
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
        <Text style={styles.error}>
          {this.state.title_error}
        </Text>
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
        <Text style={styles.error}>
          {this.state.artist_error}
        </Text>
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
        <Text style={styles.error}>
          {this.state.key_error}
        </Text>
        </View>
        <View style={styles.rowInput}>
          <Text>
            Lyrics
          </Text>
          <TextInput
            style={[styles.searchInput, styles.lyricsInput]}
            multiline={true}
            placeholder="Lyrics"
            value={this.state.lyrics}
            onChangeText={(text) => this.setState({lyrics: text})}
          />
        <Text style={styles.error}>
          {this.state.lyrics_error}
        </Text>
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
});
