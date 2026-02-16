import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Accelerometer } from "expo-sensors";
import champions from "../data/champions";

export default function GameScreen({ onEnd }) {
    const [currentChampion, setCurrentChampion] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [status, setStatus] = useState("playing");

    const pickRandomChampion = () => {
        const random = champions[Math.floor(Math.random() * champions.length)];
        setCurrentChampion(random);
        setStatus("playing");
    };

    useEffect(() => { pickRandomChampion(); }, []);

    useEffect(() => {
        if (timeLeft === 0) { onEnd(score); return; }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        const subscription = Accelerometer.addListener(accel => {
            if (status !== "playing") return;

            if (accel.z > 0.85) {
                handleAction("correct");
            } else if (accel.z < -0.85) {
                handleAction("skip");
            }
        });

        Accelerometer.setUpdateInterval(80);
        return () => subscription.remove();
    }, [status]);

    const handleAction = (type) => {
        Vibration.vibrate(type === "correct" ? 50 : [0, 50, 50, 50]);
        if (type === "correct") {
            setScore(s => s + 1);
            setStatus("correct");
        } else {
            setStatus("skip");
        }

        setTimeout(() => {
            pickRandomChampion();
        }, 800);
    };

    return (
        <View style={[styles.container, status === "correct" ? styles.bgCorrect : status === "skip" ? styles.bgSkip : styles.bgNormal]}>
            <View style={styles.header}>
                <Text style={styles.timer}>{timeLeft}s</Text>
                <Text style={styles.scoreText}>Score: {score}</Text>
            </View>

            <Text style={styles.champion}>
                {status === "correct" ? "OUI !" : status === "skip" ? "SKIP..." : currentChampion}
            </Text>

            <Text style={styles.hint}>Tête en bas = OK | Tête en haut = PASSE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    bgNormal: { backgroundColor: "#091428" },
    bgCorrect: { backgroundColor: "#28a745" },
    bgSkip: { backgroundColor: "#dc3545" },
    header: { position: "absolute", top: 20, flexDirection: "row", width: "80%", justifyContent: "space-between" },
    timer: { fontSize: 24, color: "#C89B3C", fontWeight: "bold" },
    scoreText: { fontSize: 24, color: "#C89B3C", fontWeight: "bold" },
    champion: { fontSize: 80, color: "#F0E6D2", fontWeight: "bold", textAlign: "center", textTransform: "uppercase" },
    hint: { position: "absolute", bottom: 20, color: "rgba(240, 230, 210, 0.5)", fontSize: 14 }
});