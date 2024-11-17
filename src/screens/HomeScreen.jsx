import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useState } from 'react';
import ToDoForm from '../components/ToDoForm';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        setTodos([...todos, text])
    };

    return (
        <MainLayout>
            <View style={styles.container}>
                <ToDoForm addTodo={addTodo} />
                <ToDoList todos={todos} />

                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>

            <Footer />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10,
        paddingLeft: 8,
    },
});