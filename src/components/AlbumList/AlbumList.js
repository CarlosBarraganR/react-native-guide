import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetails from '../AlbumDetails/AlbumDetails';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbumDetails() {
        return this.state.albums.map(album => {
             return <AlbumDetails key={ album.title } album={ album }/>
        });
    }

    render() {
        return (
            <View>
                { this.renderAlbumDetails() }
            </View>
        );
    }

} 

export default AlbumList;