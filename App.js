import React, { useState, useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import ScoreScreen from "./screens/ScoreScreen";

export default function App() {
    const [screen, setScreen] = useState("home");
    const [score, setScore] = useState(0);

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }, []);

    const startGame = () => setScreen("game");
    const endGame = (finalScore) => {
        setScore(finalScore);
        setScreen("score");
    };
    const restartGame = () => setScreen("home");

    if (screen === "home") return <HomeScreen onStart={startGame} />;
    if (screen === "game") return <GameScreen onEnd={endGame} />;
    if (screen === "score") return <ScoreScreen score={score} onRestart={restartGame} />;
}