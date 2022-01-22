import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';

const Reviews = ({ navigation, route }) => {
    const { name, body, rating } = route.params
    return (
        <View style={globalStyles.container}>
            <Text>{name}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    );
};

export default Reviews;

// const styles = StyleSheet.create({
//     container: {
//         padding: 24,
//     }
// });
