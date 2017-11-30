import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from '../Card/Card';
import CardSection from '../CardSection/CardSection';

const AlbumDetails = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={styles.headerImageStyle} source={{ url: props.album.thumbnail_image }}/>
                </View>

                <View style={styles.headerInfoStyle}>
                    <Text style={styles.headerTextStyle}>{ props.album.title }</Text>
                    <Text>{ props.album.artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.albumImageStyle} source={{url: props.album.image}}/>
            </CardSection>
        </Card>
    );
}

const styles = StyleSheet.create({
    headerImageStyle:{
        width: 50,
        height: 50,
        marginRight: 10
    },
    headerInfoStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerThumbnailStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetails;