import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Stories = () => {
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
        <Pressable onPress={() => {}}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            className="rounded-full w-7 h-7"
          />
        </Pressable>
        <Text style={styles.ItemsTitle}>{item.name}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
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
