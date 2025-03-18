import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React, { useState } from "react";
import DownloadPicture from "@/components/BottomSheet";
import { Link } from "expo-router";

const account = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>account page</Text>
        <Link href={"/accountInfo"}>
          <Text
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            Go To Account Details
          </Text>
        </Link>
        <Button
          title="Open Bottom Sheet"
          onPress={() => setBottomSheetOpen(true)}
        ></Button>
        {bottomSheetOpen && (
          <DownloadPicture onClose={() => setBottomSheetOpen(false)} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default account;

const styles = StyleSheet.create({});
