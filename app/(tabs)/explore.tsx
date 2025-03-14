import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const explore = () => {
  return (
    <SafeAreaView>
      <Text>explore page</Text>
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
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({});
