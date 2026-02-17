import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Accelerometer } from "expo-sensors";
import champions from "../data/champions";
import { game_styles } from "../styles/game_styles";

const styles = StyleSheet.create(game_styles);

export default function GameScreen({ onEnd }) {
    const [currentChampion, setCurrentChampion] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [status, setStatus] = useState("playing");

    useEffect(() => {
        pickRandomChampion();
    }, []);

    const pickRandomChampion = () => {
        const random = champions[Math.floor(Math.random() * champions.length)];
        setCurrentChampion(random);
        setStatus("playing");
    };

    useEffect(() => {
        if (timeLeft === 0) {
            onEnd(score);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        const subscription = Accelerometer.addListener((accel) => {
            if (status !== "playing") return;

            if (accel.z > 0.85) {
                handleAction("correct");
            } else if (accel.z < -0.85) {
                handleAction("skip");
            }
        });

        Accelerometer.setUpdateInterval(100);
        return () => subscription.remove();
    }, [status]);

    const handleAction = (type) => {
        Vibration.vibrate(50);
        if (type === "correct") {
            setScore((s) => s + 1);
            setStatus("correct");
        } else {
            setStatus("skip");
        }

        setTimeout(() => {
            pickRandomChampion();
        }, 800);
    };

    return (
        <View style={[
            styles.container,
            status === "correct" ? styles.bgCorrect :
                status === "skip" ? styles.bgSkip :
                    styles.bgNormal
        ]}>

            <View style={styles.header}>
                <Text style={styles.timer}>{timeLeft}s</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.champion}>
                    {status === "correct" ? "OUI !" : status === "skip" ? "SKIP..." : currentChampion}
                </Text>

                {status === "playing" && (
                    <Text style={styles.scoreUnder}>SCORE: {score}</Text>
                )}
            </View>

        </View>
    );
}