import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

function StartPage() {
  return (
    <ImageBackground
      source={require("../assets/images/bg-site.jpg")}
      resizeMode={"cover"}
      style={{ flex: 1 }}
    >
      <ScrollView centerContent className=" flex-1 justify-center items-center px-2 pt-8">
        <View>
          <Image source={require("../assets/images/react-logo.png")} />
        </View>
        {/* <ActivityIndicator size={"large"} color={"gray"}/> */}
      </ScrollView>
    </ImageBackground>
  );
}

export default StartPage;
