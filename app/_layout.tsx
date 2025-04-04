import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, useNavigationContainerRef } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { theme } from "../constants/theme";
import { PartyProvider } from "../context/PartyContext";
import { RSVPProvider } from "../context/RSVPContext";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://ff5e536ab7beddcf8b6f10b0804145a7@o4508270032388096.ingest.de.sentry.io/4508270038614096",
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export const unstable_settings = {
  initialRouteName: "welcome",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded, error] = useFonts({
    "Body-Regular": require("../assets/fonts/Body-Regular.ttf"),
    "Body-Bold": require("../assets/fonts/Body-Bold.ttf"),
    "Heading-Thin": require("../assets/fonts/Heading-Thin.otf"),
    "Heading-Medium": require("../assets/fonts/Heading-Medium.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <PartyProvider>
        <RSVPProvider>
          <Slot />
        </RSVPProvider>
      </PartyProvider>
    </NativeBaseProvider>
  );
}

// Wrap the Root Layout route component with `Sentry.wrap` to capture gesture info and profiling data.
export default Sentry.wrap(RootLayout);
