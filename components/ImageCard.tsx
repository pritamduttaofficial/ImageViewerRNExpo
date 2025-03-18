import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedText } from "./ThemedText";
import Icon from "@expo/vector-icons/FontAwesome";

const ImageCard = ({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
          <View>
            <Icon name={"heart"} size={20} color="white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
