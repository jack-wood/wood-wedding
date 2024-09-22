import { Text } from "react-native";
import { Redirect, SplashScreen, Stack } from "expo-router";
import { useParty } from "../../context/PartyContext";
import { useEffect } from "react";
import { useRSVP } from "../../context/RSVPContext";

export default function AppLayout() {
  const { currentParty, isLoading } = useParty();
  const { isLoading: rsvpLoading } = useRSVP();

  useEffect(() => {
    if (!isLoading && !rsvpLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading || rsvpLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!currentParty) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/welcome" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
