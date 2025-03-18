import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="accountInfo"
        options={{
          headerShown: true,
          headerTitle: "Account Info",
          headerBackTitle: "Go  Back",
        }}
      />
    </Stack>
  );
};

export default Layout;
