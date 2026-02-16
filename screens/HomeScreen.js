import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function HomeScreen({ onStart }) {
    return (
        <ImageBackground
            source={require("../assets/bg_lol.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>CHAMPGUESS</Text>

                <TouchableOpacity style={styles.button} onPress={onStart}>
                    <Text style={styles.buttonText}>LANCER LA PARTIE</Text>
                </TouchableOpacity>

                <Text style={styles.footerLeft}>v1.0.2 - Alpha</Text>

                <Text style={styles.footerRight}>Dev by MyTeam</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)", justifyContent: "center", alignItems: "center" },
    title: { color: "#C89B3C", fontSize: 60, fontWeight: "bold", marginBottom: 30, textShadowColor: 'black', textShadowRadius: 10 },
    button: { backgroundColor: "#006680", paddingVertical: 15, paddingHorizontal: 50, borderRadius: 5, borderWeight: 2, borderColor: "#C89B3C" },
    buttonText: { color: "#F0E6D2", fontSize: 20, fontWeight: "bold" },
    footerLeft: { position: "absolute", bottom: 15, left: 20, color: "rgba(255,255,255,0.6)", fontSize: 12 },
    footerRight: { position: "absolute", bottom: 15, right: 20, color: "rgba(255,255,255,0.6)", fontSize: 12 }
});