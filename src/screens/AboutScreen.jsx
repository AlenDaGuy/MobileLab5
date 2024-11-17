import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import Footer from '../components/Footer';

export default function AboutScreen() {

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.title}>About</Text>
                <Text style={styles.text}>App Name: ToDo List</Text>
                <Text style={styles.text}>By: Alen Reni Thomas</Text>
            </View>

            <Footer />
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 5,
    },
});