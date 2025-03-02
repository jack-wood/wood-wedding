import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  useTheme,
} from "native-base";
import { TouchableHighlight, useWindowDimensions, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { useParty } from "../../../context/PartyContext";
import RSVPModal from "../../../components/RSVPModal";
import { MainGuest, Party } from "../../../constants/guests";
import { useRSVP } from "../../../context/RSVPContext";
import React from "react";

dayjs.extend(relativeTime);

export default function TabOneScreen() {
  const theme = useTheme();

  const { width, height } = useWindowDimensions();

  const { currentParty } = useParty();
  const { rsvp, setRSVP } = useRSVP();

  const [showRSVP, setShowRSVP] = useState<boolean>(false);

  useEffect(() => {
    if (rsvp) {
      setShowRSVP(false); // close after rsvp is set in context
    }
  }, [rsvp]);

  return (
    <>
      <StatusBar style="light" translucent={true} />
      <Box bgColor="background" flex={1}>
        <ScrollView>
          <Box position="relative">
            <Image
              source={require("../../../assets/feature_image_2.png")}
              width={width}
              resizeMode="cover"
              height={height * 0.25}
              alt="feature_image"
            />
            <Box h="500px" />
            <Box
              position="absolute"
              top={height * 0.25 - 50}
              borderTopRadius={500}
              left={0}
              right={0}
              bgColor="background"
              p={4}
            >
              <Image
                alignSelf="center"
                alt="cabin"
                source={require("../../../assets/cabin-logo-cream.png")}
                width={100}
                height={75}
                resizeMode="contain"
              />
              <Heading fontSize="5xl" lineHeight={55} alignSelf="center">
                Jack & Lottie
              </Heading>
              <Heading mb={6} fontSize="lg" alignSelf="center">
                Invite You To Celebrate Their Wedding
              </Heading>
              <Box bgColor="lightBlue" px={4} py={6} mx={-4}>
                <Box
                  borderRadius={8}
                  borderWidth={1}
                  borderColor="royalBlue"
                  p={4}
                >
                  <Heading fontSize="3xl" color="royalBlue">
                    23rd - 26th May 2025
                  </Heading>
                  <Text color="royalBlue">
                    {dayjs("2025-05-24").diff(dayjs(), "days")} days remaining
                    until the big day.
                  </Text>
                </Box>
              </Box>

              <Box bgColor="darkBlue" px={4} py={6} mb={4} mx={-4}>
                <TouchableHighlight
                  style={{ borderRadius: 8 }}
                  underlayColor={theme.colors.royalBlue}
                  onPress={() => setShowRSVP(true)}
                >
                  <Box
                    borderRadius={8}
                    borderWidth={1}
                    borderColor="white"
                    p={4}
                  >
                    <HStack alignItems="center" justifyContent="space-between">
                      <Box flex={1}>
                        <Box flex={1} flexDir="row" alignItems="center">
                          <Heading fontSize="3xl" color="white">
                            RSVP
                          </Heading>
                          {rsvp ? (
                            <Icon
                              ml={2}
                              size="xl"
                              color={theme.colors.success[500]}
                              as={
                                <MaterialCommunityIcons name="check-circle" />
                              }
                            />
                          ) : null}
                        </Box>
                        {rsvp ? (
                          <Text color="white">
                            Thank you for completing your RSVP. You can resubmit
                            if needed.
                          </Text>
                        ) : (
                          <Text color="white">
                            Please complete your RSVP by 12th Jan.
                          </Text>
                        )}
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
            </Box>
          </Box>
          <Box h="500px" />
        </ScrollView>
      </Box>
      {showRSVP ? (
        <Modal presentationStyle="fullScreen" statusBarTranslucent={true}>
          <RSVPModal
            party={currentParty as Party}
            setRSVP={setRSVP}
            rsvp={rsvp}
            close={() => setShowRSVP(false)}
          />
        </Modal>
      ) : null}
    </>
  );
}
