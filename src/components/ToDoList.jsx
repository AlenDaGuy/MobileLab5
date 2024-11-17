import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ToDoList({ todos }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <FlatList
                data={todos}
                renderItem={({ item, index }) => <Text style={styles.item} key={index}>{item}</Text>}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    item: {
        padding: 10,
        color: 'black',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});