import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import AddNewSong from './AddNewSong'

const Realm = require('realm');

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  deleteSong = () => {
    this.props.realm.write(() => {
      this.props.realm.delete(this.props.item)
      this.props.onItemDelete(this.props.realm)
    });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.words}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <View>
                <Text style={styles.price}>{this.props.item.artist}</Text>
                <Text style={styles.price}>Key of {this.props.item.key}</Text>
              </View>
            </View>
            <View>
              <Button
                title='Delete'
                onPress={this.deleteSong}
              />
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class SongsIndex extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      realm: props.realm
    };
  }

  onItemDelete = (item, realm) => {
    this.setState({realm: realm})
  }

  onPressItem = (song) => {
    this.props.navigator.push({
      title: 'Edit',
      component: AddNewSong,
      passProps: {
        realm: this.state.realm,
        song: song,
        isEdit: true,
        title: song.title,
        artist: song.artist,
        music_key: song.key,
        lyrics: song.lyrics,
      }
    });
  };

  onPressAddNew = () => {
    this.props.navigator.push({
      title: 'Add New',
      component: AddNewSong,
      passProps: {
        realm: this.state.realm,
      }
    });
  }

  keyExtractor = (item, index) => index;

  renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      realm={this.state.realm}
      onPressItem={() => this.onPressItem(item)}
      onItemDelete={this.onItemDelete.bind(this, item)}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Add New"
          onPress={this.onPressAddNew}
        />
        <FlatList
          data={this.state.realm.objects('Song')}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  words: {
    flexGrow: 1
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  price: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
});
