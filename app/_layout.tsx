import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { theme } from "../constants/theme";
import { PartyProvider } from "../context/PartyContext";
import { removeCurrentParty } from "../data/currentParty";
import { RSVPProvider } from "../context/RSVPContext";
import { removeRSVP } from "../data/rsvp";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "welcome",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Body-Regular": require("../assets/fonts/Body-Regular.ttf"),
    "Body-Bold": require("../assets/fonts/Body-Bold.ttf"),
    "Heading-Thin": require("../assets/fonts/Heading-Thin.otf"),
    "Heading-Medium": require("../assets/fonts/Heading-Medium.otf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    const clear = async () => {
      await removeCurrentParty();
      await removeRSVP();
    };

    // TODO - Remove
    clear();
  }, []);

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
