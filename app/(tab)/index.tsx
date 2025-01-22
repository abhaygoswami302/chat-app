import React, { Component, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import Stories from "@/components/Home/Stories";

function Home() {

  return (
    <View
      // source={require("../assets/images/bg-site.jpg")}
      // resizeMode={"cover"}
      style={{ flex: 1 }}
      className="px-2"
    >
      <View style={styles.headerView}>
        <Pressable>
          <Image
            source={require("@/assets/images/Camera Icon.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("@/assets/images/Instagram Logo.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>

        <View style={styles.ImageStyle}>
          <Pressable>
            <Image
              source={require("@/assets/images/IGTV.png")}
              width={105}
              height={28}
              style={styles.logoDem}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("@/assets/images/Messanger.png")}
              width={105}
              height={28}
              style={styles.logoDem}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.storieContainer}>
      <Stories/>
      </View>

      {/* <ActivityIndicator size={"large"} color={"gray"}/> */}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#ffffff",
  },
  gradientBorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 3, // Space between gradient and inner content
    justifyContent: "center",
    alignItems: "center",
  },
  headerView: {
    paddingHorizontal: 5,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    gap: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
  },
  logoDem: {
    resizeMode: "contain",
    alignSelf: "center",
  },
  ImageStyle: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 99999,
    objectFit: "cover",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
  },
  Items: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: hp(1),
  },
  appTitle: {
    fontSize: hp(3),
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
  },
  ItemsTitle: {
    fontSize: hp(1.7),
    color: "#101010",
    textAlign: "center",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  seperator: {
    width: 10,
  },
  storieContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
    paddingBottom: 8,
  },
});
