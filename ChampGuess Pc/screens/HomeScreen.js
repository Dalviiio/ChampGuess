import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ onStart }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ChampGuess</Text>
            <TouchableOpacity style={styles.button} onPress={onStart}>
                <Text style={styles.buttonText}>Lancer la partie</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#00c853",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});
