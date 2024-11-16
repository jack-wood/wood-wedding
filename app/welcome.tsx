import {
  Box,
  Text,
  Button,
  Heading,
  useTheme,
  Image,
  HStack,
  Icon,
} from "native-base";
import { useEffect, useState } from "react";
import { Party, parties } from "../constants/guests";
import { FlatList, TouchableHighlight } from "react-native";
import { useParty } from "../context/PartyContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PartyCard from "../components/PartyCard";
import GuestCard from "../components/GuestCard";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  const theme = useTheme();
  const [continuePressed, setContinuePressed] = useState(false);
  const [selectedParty, setSelectedParty] = useState<Party>();

  const { setCurrentParty, currentParty } = useParty();

  const onContinue = () => {
    setContinuePressed(true);
  };

  const sortedParties = parties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const onConfirm = async () => {
    await setCurrentParty(selectedParty as Party);
  };

  useEffect(() => {
    if (currentParty) {
      router.navigate("/"); // navigate once the party context is set
    }
  }, [currentParty]);

  return (
    <>
      <StatusBar style="dark" translucent={true} />
      <Box safeAreaTop bgColor="background" flex={1}>
        <Box flex={1}>
          {continuePressed ? (
            <FlatList
              data={selectedParty?.guests || []}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              ListHeaderComponent={
                <Box mb={4}>
                  <Image
                    alignSelf="center"
                    alt="cabin-logo"
                    source={require("../assets/cabin-logo-cream.png")}
                    resizeMode="contain"
                    width={100}
                    height={75}
                  />
                  <Heading>Party Guests</Heading>
                  <Text lineHeight={22}>
                    Please double check that you have selected the correct party
                  </Text>
                </Box>
              }
              renderItem={({ item }) => <GuestCard guest={item} />}
              ListFooterComponent={<Box height="180px" />}
            />
          ) : (
            <FlatList
              data={sortedParties}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              ListHeaderComponent={
                <Box mb={4}>
                  <Image
                    alignSelf="center"
                    alt="cabin-logo"
                    source={require("../assets/cabin-logo-cream.png")}
                    resizeMode="contain"
                    width={100}
                    height={75}
                  />
                  <Heading>Guest List</Heading>
                  <Text>Please select your party from the list below</Text>
                </Box>
              }
              renderItem={({ item }) => (
                <PartyCard
                  party={item}
                  onPress={() => setSelectedParty(item)}
                  selected={!!selectedParty && item.id === selectedParty.id}
                />
              )}
              ListFooterComponent={<Box height="180px" />}
            />
          )}
        </Box>

        {continuePressed ? (
          <Box position="absolute" safeAreaTop top={4} left={2}>
            <Button
              variant="ghost"
              onPress={() => setContinuePressed(false)}
              p={0}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <HStack alignItems="center">
                <Icon
                  color="royalBlue"
                  as={<MaterialCommunityIcons name="chevron-left" />}
                />
                <Text color="royalBlue" mr="2" fontSize="md">
                  Back
                </Text>
              </HStack>
            </Button>
          </Box>
        ) : null}
        {selectedParty ? (
          <Box
            bgColor="darkBlue"
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            safeAreaBottom
          >
            {continuePressed ? (
              <Box bgColor="darkBlue" px={4} py={4}>
                <TouchableHighlight
                  style={{ borderRadius: 8 }}
                  underlayColor={theme.colors.royalBlue}
                  onPress={onConfirm}
                >
                  <Box
                    borderRadius={8}
                    borderWidth={1}
                    borderColor="white"
                    p={4}
                  >
                    <HStack alignItems="center" justifyContent="space-between">
                      <Box flex={1}>
                        <Heading fontSize="3xl" color="white">
                          Yes
                        </Heading>
                        <Text color="white">I confirm this is correct.</Text>
                      </Box>
                      <Icon
                        color="white"
                        size="2xl"
                        as={<MaterialCommunityIcons name="chevron-right" />}
                      />
                    </HStack>
                  </Box>
                </TouchableHighlight>
              </Box>
            ) : (
              <Box bgColor="darkBlue" px={4} py={4}>
                <TouchableHighlight
                  style={{ borderRadius: 8 }}
                  underlayColor={theme.colors.royalBlue}
                  onPress={onContinue}
                >
                  <Box
                    borderRadius={8}
                    borderWidth={1}
                    borderColor="white"
                    p={4}
                  >
                    <HStack alignItems="center" justifyContent="space-between">
                      <Box flex={1}>
                        <Heading fontSize="3xl" color="white">
                          Continue
                        </Heading>
                        <Text color="white">
                          Set {selectedParty.name} as your party.
                        </Text>
                      </Box>
                      <Icon
                        color="white"
                        size="2xl"
                        as={<MaterialCommunityIcons name="chevron-right" />}
                      />
                    </HStack>
                  </Box>
                </TouchableHighlight>
              </Box>
            )}
          </Box>
        ) : null}
      </Box>
    </>
  );
}
