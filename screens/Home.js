import React, { useState } from 'react';
import { Button, FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/Global'

const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { name: 'Harry Potter', rating: 1, body: 'lorem ipsum lorem ipsum', key: '1' },
        { name: 'Fast and Furious', rating: 3, body: 'lorem ipsum lorem ipsum', key: '2' },
        { name: 'Spiderman No way Home', rating: 4, body: 'lorem ipsum lorem ipsum', key: '3' }

    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Reviews', item)}>
                        <Text style={globalStyles.titleText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;

// const styles = StyleSheet.create({
//     container: {
//         padding: 24,
//     },
//     home: {
//         fontFamily: 'oswaldRegular',
//         fontSize: 24,
//     }
// });
