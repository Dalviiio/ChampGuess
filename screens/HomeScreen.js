import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { home_styles } from "../styles/home_styles";

const styles = StyleSheet.create(home_styles);

export default function HomeScreen({ onStart }) {
    return (
        <ImageBackground
            source={require("../assets/bg_lol.jpg")}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.overlay}>

                <Text style={styles.title}>CHAMPGUESS</Text>

                <TouchableOpacity style={styles.button} onPress={onStart}>
                    <Text style={styles.buttonText}>LANCER LA PARTIE</Text>
                </TouchableOpacity>

                <Text style={styles.footerLeft}>v1.0.0</Text>
                <Text style={styles.footerRight}>Dev by Dalviiio</Text>

            </View>
        </ImageBackground>
    );
}