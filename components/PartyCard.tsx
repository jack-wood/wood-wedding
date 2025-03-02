import { Box, Card, HStack, Heading, Image, Text, useTheme } from "native-base";
import React from "react";
import { getAvatar, Party } from "../constants/guests";
import { TouchableHighlight } from "react-native";

interface Props {
  party: Party;
  onPress: () => void;
  selected: boolean;
}

const PartyCard = ({ party, onPress, selected }: Props) => {
  const theme = useTheme();

  return (
    <Card
      mb={4}
      borderWidth={0}
      p={0}
      bgColor={selected ? "lightBlue" : "white"}
    >
      <TouchableHighlight
        onPress={onPress}
        underlayColor={theme.colors.lightBlue}
      >
        <Box py={4} px={4}>
          <HStack alignItems="center" justifyContent="space-between">
            <Box flex={1}>
              <Heading fontSize="2xl">{party.name}</Heading>
              <Text numberOfLines={1} fontSize="sm" color="midBlue">
                {party.guests.map((g) => g.role).join(" • ")}
              </Text>
            </Box>
            <HStack alignItems="center">
              {party.guests.slice(0, 2).map((g, index) => (
                <Image
                  key={`${g.id}_avatar`}
                  alt="guest_avatar"
                  source={getAvatar(g.id)}
                  width="50px"
                  height="50px"
                  borderRadius="25px"
                  borderWidth={2}
                  borderColor="white"
                  ml={index > 0 ? -3 : 0}
                />
              ))}
              {party.guests.length > 2 ? (
                <Box
                  position="absolute"
                  bottom={0}
                  borderWidth={2}
                  borderColor="white"
                  right="-15px"
                  h="30px"
                  w="30px"
                  borderRadius="15px"
                  bgColor="royalBlue"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading fontSize="lg" color="white">
                    +{party.guests.length - 2}
                  </Heading>
                </Box>
              ) : null}
            </HStack>
          </HStack>
        </Box>
      </TouchableHighlight>
    </Card>
  );
};

export default PartyCard;
