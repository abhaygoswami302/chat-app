import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function StartPage() {

    return (
      <View className=" flex-1 justify-center items-center px-2 pt-8">
        <ActivityIndicator size={"large"} color={"gray"}/>
      </View>
    );

}

export default StartPage;
