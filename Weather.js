import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ temp, cond, temp_min, temp_max, feels_like, icon }) {
    return (
        <LinearGradient colors={["#68B1FF", "#82BEFF"]} style={style.container}>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <Image style={style.logo} source={{uri: `http://openweathermap.org/img/wn/${icon}@4x.png`}} />
                <Text style={{ fontSize: 50 }}>{temp}°C</Text>
                <Text style={{ fontSize: 20 }}><Text style={{ color: "blue" }}>{temp_min}°</Text> / <Text style={{ color: "red" }}>{temp_max}°</Text> | 체감온도 {feels_like}°</Text>
            </View>
            <View style={style.container}>
                <Text style={{fontSize: 50}}>{cond}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
      width: 300,
      height: 300,
    }
});