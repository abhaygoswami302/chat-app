import React, { Component } from "react";
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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function StartPage() {
  const data = [
    { id: 1, name: "lorem1", image: "https://picsum.photos/200/300" },
    { id: 2, name: "lorem2", image: "https://picsum.photos/200" },
    { id: 3, name: "lorem3", image: "https://picsum.photos/id/237/200/300" },
    { id: 4, name: "lorem4", image: "https://picsum.photos/id/235/200/300" },
    { id: 5, name: "lorem5", image: "https://picsum.photos/id/203/200/300" },
    { id: 6, name: "lorem6", image: "https://picsum.photos/id/364/200/300" },
    { id: 7, name: "lorem7", image: "https://picsum.photos/id/366/200/300" },
    { id: 8, name: "lorem8", image: "https://picsum.photos/id/453/200/300" },
    { id: 9, name: "lorem9", image: "https://picsum.photos/id/102/200/300" },
    { id: 10, name: "lorem10", image: "https://picsum.photos/id/237/200/745" },
    { id: 11, name: "lorem11", image: "https://picsum.photos/id/789/200/300" },
    { id: 12, name: "lorem12", image: "https://picsum.photos/id/143/200/300" },
    { id: 13, name: "lorem13", image: "https://picsum.photos/id/456/200/300" },
    { id: 14, name: "lorem14", image: "https://picsum.photos/id/123/200/300" },
    { id: 15, name: "lorem15", image: "https://picsum.photos/id/741/200/300" },
    { id: 16, name: "lorem16", image: "https://picsum.photos/id/789/200/300" },
  ];
  const renderItems = ({ item }) => {
    return (
      <View style={styles.Items}>
        <Pressable onPress={() => console.log("hello")}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
        <Text style={styles.ItemsTitle}>{item.name}</Text>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require("../assets/images/bg-site.jpg")}
      resizeMode={"cover"}
      style={{ flex: 1 }}
    >
      <FlatList
        data={data}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />

      {/* <ActivityIndicator size={"large"} color={"gray"}/> */}
    </ImageBackground>
  );
}

export default StartPage;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  image: {
    height: hp(7),
    width: wp(16),
    borderRadius: 99999,
    objectFit: "cover",
    backgroundColor: "#ffffff",
  },
  Items: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: hp(1),
  },
  ItemsTitle: {
    fontSize: hp(1.1),
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "500",
  },
  seperator: {
    width: 10,
  },
});
