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
    container: { flex: 1, backgroundColor: "#111", justifyContent: "center", alignItems: "center" },
    title: { color: "white", fontSize: 28, marginBottom: 20 },
    score: { color: "#00c853", fontSize: 36, fontWeight: "bold", marginBottom: 40 },
    button: { backgroundColor: "#2962ff", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10 },
    buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
