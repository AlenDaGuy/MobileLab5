import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>ToDo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 50,
        paddingTop: 15,
        backgroundColor: 'darkblue',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    footerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default Footer