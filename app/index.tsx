import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

// import { Container } from './styles';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Ryu!!</Text>
      <StatusBar style="auto"></StatusBar>
      <Link href="/home" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
}
