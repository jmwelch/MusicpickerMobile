import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

export default class RandomSong extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      song: this.getRandomSong()
    }
  }

  getRandomSong = () => {
    var songs = this.props.realm.objects('Song');
    return songs[Math.floor(Math.random()*songs.length)]
  }

  shufflePressed = () => {
    this.setState({song: this.getRandomSong()})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Button
            style={styles.shuffle}
            title="Shuffle"
            onPress={this.shufflePressed}
          />
          <Text style={styles.title}>
            {this.state.song.title}
          </Text>
          <Text style={styles.artist}>
            {this.state.song.artist}
          </Text>
          <Text style={styles.key}>
            Key of: {this.state.song.key}
          </Text>
          <Text style={styles.lyrics}>
            {this.state.song.lyrics}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  shuffle: {
  },
  title: {
    fontSize: 60
  },
  artist: {
    fontSize: 40
  },
  key: {
    fontSize: 20,
    marginBottom: 30
  },
  lyrics: {
    fontSize: 30
  }
})
