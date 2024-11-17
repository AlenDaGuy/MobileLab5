import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTodo }) {
    const [text, setText] = useState('')

    const handleAddTodo = () => {
        addTodo(text)
        setText('')
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                value={text}
                onChangeText={setText}
            />
            <Button title="Add" onPress={handleAddTodo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
});