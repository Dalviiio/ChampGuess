import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ScoreScreen({ score, onRestart }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Temps écoulé !</Text>
            <Text style={styles.score}>Score final : {score}</Text>
            <TouchableOpacity style={styles.button} onPress={onRestart}>
                <Text style={styles.buttonText}>Rejouer</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#091428", justifyContent: "center", alignItems: "center" },
    title: { color: "#C89B3C", fontSize: 32, marginBottom: 10, fontWeight: "bold" },
    score: { color: "#fff", fontSize: 60, fontWeight: "bold", marginBottom: 30 },
    button: { backgroundColor: "#1E2328", paddingVertical: 15, paddingHorizontal: 50, borderRadius: 5, borderWidth: 1, borderColor: "#C89B3C" },
    buttonText: { color: "#C89B3C", fontSize: 18, fontWeight: "bold" }
});
