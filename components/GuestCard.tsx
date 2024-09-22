import React from "react";
import { Guest } from "../constants/guests";
import { Box, Card, HStack, Heading, Image, Text } from "native-base";

interface Props {
  guest: Guest;
}

const GuestCard = ({ guest }: Props) => {
  return (
    <Card mb={4} borderWidth={0} py={4} px={4}>
      <HStack>
        <Image
          alt="guest_avatar"
          source={guest.picture}
          width="50px"
          height="50px"
          borderRadius="25px"
          borderColor="white"
          mr={3}
        />
        <Box>
          <Heading fontSize="2xl">{guest.name}</Heading>
          <Text fontSize="sm" color="midBlue">
            {guest.role}
          </Text>
        </Box>
      </HStack>
    </Card>
  );
};

export default GuestCard;
