import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  ScrollView,
  Spinner,
  Text,
  useTheme,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Guest, Party } from "../constants/guests";
import { RSVPGuest, TRSVPGuest } from "./RSVPGuest";
import { TouchableHighlight } from "react-native";

import { send, EmailJSResponseStatus } from "@emailjs/react-native";
import { RSVP } from "../data/rsvp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface Props {
  party: Party;
  rsvp: RSVP | null | undefined;
  setRSVP: (rsvp: RSVP) => Promise<void>;
  close: () => void;
}

export enum DayOfArrival {
  Friday = "Friday",
  Saturday = "Saturday",
}

const RSVPModal = ({ party, setRSVP, rsvp, close }: Props) => {
  const theme = useTheme();
  const [rsvps, setRSVPs] = useState<TRSVPGuest[]>([]);
  const [sending, setSending] = useState(false);

  const [songSuggestions, setSongSuggestions] = useState("");

  const setInitRSVPs = async () => {
    if (rsvp) {
      setRSVPs(rsvp.rsvps);
    } else {
      const guestRSVPs: TRSVPGuest[] = party.guests.map((g) => ({
        id: g.id,
        name: g.name,
        attending: null,
        dietryRequirements: "",
      }));

      setRSVPs(guestRSVPs);
    }
  };

  useEffect(() => {
    if (party) {
      setInitRSVPs();
    }
  }, [party]);

  const complete = useMemo(() => {
    let complete = true;

    rsvps.forEach((rsvp) => {
      console.log("rsvp:", rsvp);
      if (rsvp.attending === null) complete = false;
    });

    console.log("return complete:", complete);
    return complete;
  }, [rsvps]);

  const onComplete = async () => {
    setSending(true);
    try {
      const rsvpData: RSVP = {
        partyId: party.id,
        rsvps,
        songSuggestions,
      };

      await send(
        "service_cf2r4j1",
        "template_th4xquc",
        {
          json: JSON.stringify(rsvpData),
        },
        {
          publicKey: "VX-4mHZxo8Eemusgf",
        }
      );

      await setRSVP(rsvpData);
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EmailJS Request Failed...", err);
      }

      console.log("ERROR", err);
    }
  };

  return (
    <Box
      safeAreaTop
      flex={1}
      width="100%"
      height="100%"
      backgroundColor="background"
    >
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <Button
          position="absolute"
          variant="ghost"
          onPress={close}
          alignSelf="flex-start"
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
        <Image
          alignSelf="center"
          alt="cabin-logo"
          source={require("../assets/cabin-logo-cream.png")}
          resizeMode="contain"
          width={100}
          height={75}
        />
        <Heading px={4} mt={-2}>
          RSVP
        </Heading>
        <HStack
          mx={4}
          mb={4}
          justifyContent="space-between"
          alignContent="center"
        >
          <Heading fontSize="2xl">Party Guests</Heading>
          <Text mr={8} mt={2}>
            Attending?*
          </Text>
        </HStack>
        <Box borderRadius={8} overflow="hidden" mx={4}>
          {rsvps.map((rsvp, index) => (
            <Box id={`rsvp_${rsvp.id}`} key={`rsvp_${rsvp.id}`}>
              <RSVPGuest
                rsvp={rsvp}
                index={index}
                rsvps={rsvps}
                setRSVPs={setRSVPs}
                guest={party.guests.find((g) => g.id === rsvp.id) as Guest}
              />
            </Box>
          ))}
        </Box>
        <Box px={4}>
          <Heading fontSize="2xl" mb={4}>
            Song Suggestions
          </Heading>
          <Input
            value={songSuggestions}
            placeholder="Enter songs here..."
            multiline={true}
            height="100px"
            bgColor="white"
            textAlignVertical="top"
            onChangeText={(text) => setSongSuggestions(text)}
            type="text"
            _focus={{ borderColor: "royalBlue" }}
          />
        </Box>
        <Box h="500px" />
      </KeyboardAwareScrollView>
      {complete ? (
        <Box
          bgColor={sending ? "royalBlue" : "darkBlue"}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="150px"
        >
          <Box
            bgColor={sending ? "royalBlue" : "darkBlue"}
            safeAreaBottom
            px={4}
            py={6}
          >
            <TouchableHighlight
              style={{ borderRadius: 8 }}
              underlayColor={theme.colors.royalBlue}
              onPress={onComplete}
              disabled={sending}
            >
              <Box borderRadius={8} borderWidth={1} borderColor="white" p={4}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Box flex={1}>
                    <Heading fontSize="3xl" color="white">
                      Complete
                    </Heading>
                    <Text color="white">Send Jack & Lottie your RSVP.</Text>
                  </Box>
                  {sending ? (
                    <Spinner color="white" size="lg" />
                  ) : (
                    <Icon
                      color="white"
                      size="2xl"
                      as={<MaterialCommunityIcons name="chevron-right" />}
                    />
                  )}
                </HStack>
              </Box>
            </TouchableHighlight>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default RSVPModal;
