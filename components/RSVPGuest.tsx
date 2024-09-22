import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Guest } from "../constants/guests";

export interface TRSVPGuest {
  id: number;
  name: string;
  attending: boolean | null;
  dietryRequirements: string;
}

interface Props {
  rsvp: TRSVPGuest;
  index: number;
  rsvps: TRSVPGuest[];
  setRSVPs: (rsvps: TRSVPGuest[]) => void;
  guest: Guest;
}

export const RSVPGuest = ({ rsvp, index, rsvps, setRSVPs, guest }: Props) => {
  const [attending, setAttending] = useState<boolean | null>(rsvp.attending);
  const [dietryRequirements, setDietryRequirements] = useState(
    rsvp.dietryRequirements
  );

  useEffect(() => {
    if (attending !== null) {
      const newRSVPS = [...rsvps];

      newRSVPS[index] = {
        ...rsvp,
        attending: attending,
      };

      setRSVPs(newRSVPS);
    }
  }, [attending]);

  useEffect(() => {
    const newRSVPS = [...rsvps];

    newRSVPS[index] = {
      ...rsvp,
      dietryRequirements: dietryRequirements,
    };

    setRSVPs(newRSVPS);
  }, [dietryRequirements]);

  return (
    <Card mb={4} borderWidth={0} py={4} px={4}>
      <HStack justifyContent="space-between">
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
        <HStack
          alignItems="center"
          borderWidth={1}
          borderRadius={8}
          borderColor="royalBlue"
          height="50px"
          overflow="hidden"
        >
          <Button
            onPress={() => setAttending(false)}
            w={60}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            height="50px"
            backgroundColor={attending === false ? "darkBlue" : "transparent"}
            _text={{
              color: attending === false ? "white" : "royalBlue",
            }}
          >
            No
          </Button>
          <Button
            backgroundColor={attending === true ? "darkBlue" : "transparent"}
            _text={{
              color: attending === true ? "white" : "royalBlue",
            }}
            colorScheme="primary"
            onPress={() => setAttending(true)}
            w={60}
            height="50px"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
          >
            Yes
          </Button>
        </HStack>
      </HStack>
      {attending === true ? (
        <Box mt={2}>
          <Text mb={1} color="royalBlue" fontSize="sm">
            Dietry Requirements
          </Text>
          <Input
            value={dietryRequirements}
            onChangeText={(text) => setDietryRequirements(text)}
            type="text"
            _focus={{ borderColor: "royalBlue" }}
          />
        </Box>
      ) : null}
      {attending === false ? (
        <Box mt={2}>
          <Text color="royalBlue" fontSize="sm">
            We're sorry to hear that {rsvp.name} can't celebrate our special day
            with us.
          </Text>
        </Box>
      ) : null}
    </Card>
  );
};
