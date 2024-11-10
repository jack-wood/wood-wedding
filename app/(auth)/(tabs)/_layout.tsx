import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Box, Image, useTheme } from "native-base";
import { RSVPProvider } from "../../../context/RSVPContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopWidth: 0,
          shadowRadius: 0,
          height: 75 + insets.bottom,
        },
        tabBarActiveTintColor: theme.colors.royalBlue,
        tabBarInactiveTintColor: theme.colors.lightBlue,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Body-Regular",
          marginBottom: 10,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              alt="home"
              source={
                focused
                  ? require(`../../../assets/home-active.png`)
                  : require("../../../assets/home-inactive.png")
              }
              width="40px"
              height="40px"
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="itinerary"
        options={{
          title: "Itinerary",
          tabBarIcon: ({ focused }) => (
            <Image
              alt="itinerary"
              source={
                focused
                  ? require(`../../../assets/itinerary-active.png`)
                  : require("../../../assets/itinerary-inactive.png")
              }
              width="35px"
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="venue"
        options={{
          title: "Venue",
          tabBarIcon: ({ focused }) => (
            <Image
              alt="venue"
              source={
                focused
                  ? require(`../../../assets/venue-active.png`)
                  : require("../../../assets/venue-inactive.png")
              }
              width="35px"
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "FAQs",
          tabBarIcon: ({ focused }) => (
            <Image
              alt="info"
              source={
                focused
                  ? require(`../../../assets/info-active.png`)
                  : require("../../../assets/info-inactive.png")
              }
              width="30px"
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
