import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Accelerometer } from "expo-sensors";
import champions from "../data/champions";

export default function GameScreenMobile({ onEnd }) {
    const [currentChampion, setCurrentChampion] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);

    const pickRandomChampion = () => {
        const random = champions[Math.floor(Math.random() * champions.length)];
        setCurrentChampion(random);
    };

    useEffect(() => { pickRandomChampion(); }, []);

    useEffect(() => {
        if (timeLeft === 0) { onEnd(score); return; }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Détection mouvement tête
    useEffect(() => {
        let lastActionTime = 0;

        const subscription = Accelerometer.addListener(accel => {
            const now = Date.now();
            if (now - lastActionTime < 800) return; // éviter double déclenchement

            if (accel.y > 0.7) { // tête vers le haut -> Skip
                pickRandomChampion();
                Vibration.vibrate(50);
                lastActionTime = now;
            } else if (accel.y < -0.7) { // tête vers le bas -> Valider
                setScore(prev => prev + 1);
                pickRandomChampion();
                Vibration.vibrate(50);
                lastActionTime = now;
            }
        });

        Accelerometer.setUpdateInterval(200);

        return () => subscription.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>Temps : {timeLeft}s</Text>
            <Text style={styles.champion}>{currentChampion}</Text>
            <Text style={styles.score}>Score : {score}</Text>
            <Text style={styles.help}>(Hoche tête pour valider / skip)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#222", justifyContent: "center", alignItems: "center" },
    timer: { position: "absolute", top: 60, fontSize: 24, color: "white" },
    champion: { fontSize: 40, color: "white", fontWeight: "bold", marginVertical: 20 },
    score: { position: "absolute", bottom: 100, fontSize: 20, color: "white" },
    help: { position: "absolute", bottom: 50, color: "#aaa" }
});
