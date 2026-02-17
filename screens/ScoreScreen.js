import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scoreStyles } from "../styles/score_styles";

const styles = StyleSheet.create(scoreStyles);

export default function ScoreScreen({ score, onRestart }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PARTIE TERMINÉE</Text>
            <Text style={styles.scoreValue}>{score}</Text>
            <Text style={styles.label}>Champions devinés</Text>

            <TouchableOpacity style={styles.button} onPress={onRestart}>
                <Text style={styles.buttonText}>REJOUER</Text>
            </TouchableOpacity>
        </View>
    );
}