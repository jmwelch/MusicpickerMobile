import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

function DisplaySong(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Button
          style={styles.shuffle}
          title="Shuffle"
          onPress={props.shufflePressed}
        />
        <Text style={styles.title}>
          {props.song.title}
        </Text>
        <Text style={styles.artist}>
          {props.song.artist}
        </Text>
        <Text style={styles.key}>
          Key of: {props.song.key}
        </Text>
        <Text style={styles.lyrics}>
          {props.song.lyrics}
        </Text>
      </View>
    </ScrollView>
  )
}

function NoSong() {
  return (
    <View style={[styles.container, styles.content]}>
      <Text>
        No songs
      </Text>
    </View>
  )
}

function ShuffleDisplay(props) {
  if (props.song) {
    return <DisplaySong
            song={props.song}
            shufflePressed={props.shufflePressed}
           />
  } else {
    return <NoSong />
  }
}

export default class RandomSong extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      song: this.getRandomSong()
    }
  }

  getRandomSong = () => {
    var songs = this.props.realm.objects('Song');
    if (songs.length > 0) {
      return songs[Math.floor(Math.random()*songs.length)]
    } else {
      return null
    }
  }

  shufflePressed = () => {
    this.setState({song: this.getRandomSong()})
  }

  render() {
    return (
      <ShuffleDisplay
        song={this.state.song}
        shufflePressed={this.shufflePressed}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
    fontSize: 30
  },
  artist: {
    fontSize: 20
  },
  key: {
    fontSize: 10,
    marginBottom: 30
  },
  lyrics: {
    fontSize: 15
  }
})
