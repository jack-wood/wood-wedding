import { Box, HStack, Heading, Icon, Image, Text } from "native-base";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabOneScreen() {
  return (
    <Box safeAreaTop bgColor="background" flex={1}>
      <Box mb={4} px={4}>
        <Image
          source={require("../../assets/cabin.png")}
          width="200px"
          resizeMode="contain"
          height="100px"
        />
        <Heading fontSize="52px">Jack & Lottie</Heading>
        <Text>23/05/2025-26/05/2025</Text>
      </Box>

      <Box bgColor="primary.500" px={4} py={6}>
        <TouchableOpacity>
          <Box borderRadius={8} borderWidth={1} borderColor="white" p={4}>
            <HStack alignItems="center" justifyContent="space-between">
              <Box flex={1}>
                <Heading fontSize="3xl" color="white">
                  RSVP
                </Heading>
                <Text color="white">
                  Please complete your RSVP by INSERT_DATE.
                </Text>
              </Box>
              <Icon
                color="white"
                size="2xl"
                as={<MaterialCommunityIcons name="chevron-right" />}
              />
            </HStack>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
