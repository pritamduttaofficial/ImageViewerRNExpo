import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "@/components/ImageCard";
import DownloadPicture from "@/components/BottomSheet";

const explore = () => {
  const wallpapers = useWallpapers();
  const [bottomSheetOpen, setBottomSheetOpen] = useState<null | Wallpaper>(
    null
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ height: 400 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/dtLhxvFGSwiES5utIgDeUw",
            }}
          />
        }
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 == 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={item}
                    onPress={() => setBottomSheetOpen(item)}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 == 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={item}
                    onPress={() => setBottomSheetOpen(item)}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </ParallaxScrollView>
      {bottomSheetOpen && (
        <DownloadPicture onClose={() => setBottomSheetOpen(null)} />
      )}
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
  },
  imageContainer: {
    padding: 6,
  },
});
