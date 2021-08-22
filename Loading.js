import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text}>날씨 로딩중...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 100,
        backgroundColor: "yellow"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});