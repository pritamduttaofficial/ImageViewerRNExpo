import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <Link href={"/suggested"}>
        <Text>Suggested</Text>
      </Link>
      <Link href={"/library"}>
        <Text>Library</Text>
      </Link>
      <Link href={"/liked"}>
        <Text>Liked</Text>
      </Link>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
