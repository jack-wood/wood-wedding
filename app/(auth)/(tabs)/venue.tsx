import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  useTheme,
} from "native-base";
import {
  Dimensions,
  Linking,
  Platform,
  TouchableHighlight,
  useWindowDimensions,
} from "react-native";
import { useParty } from "../../../context/PartyContext";
import { useEffect, useState } from "react";

const FULL_ADDRESS = "Riverside Cabins, Stanwardine Lane, Shrewsbury SY4 1HY";

export default function VenueScreen() {
  const theme = useTheme();
  const { currentParty } = useParty();

  const onOpenInMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${FULL_ADDRESS}`,
      android: `geo:0,0?q=${FULL_ADDRESS}`,
    });

    Linking.openURL(url as string);
  };

  const [sitemap, setSiteMap] = useState(false);

  const { width, height } = useWindowDimensions();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box bgColor="background" flex={1}>
        <ScrollView>
          <Box position="relative">
            <Image
              source={require("../../../assets/venue_featured_image.png")}
              width={width}
              resizeMode="cover"
              height={height * 0.25}
              alt="feature_image"
            />
            <Box h="1250px" />
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
                Venue Info
              </Heading>
              <Heading mb={4} fontSize="lg" alignSelf="center">
                Welcome to the Riverside Cabins
              </Heading>
              <Text mb={4} lineHeight={22}>
                We are thrilled to have reserved the entire Riverside Cabins
                site for our wedding, which we believe is the perfect location
                for our special day. {"\n\n"}While it's not an official venue,
                the owner has allowed us to create our dream DIY wedding in this
                beautiful setting. We may ask for a little help along the way to
                make this possible.
              </Text>
              <Box bgColor="darkBlue" px={4} py={6} mb={4} mx={-4}>
                <TouchableHighlight
                  style={{ borderRadius: 8 }}
                  underlayColor={theme.colors.royalBlue}
                  onPress={onOpenInMaps}
                >
                  <Box
                    borderRadius={8}
                    borderWidth={1}
                    borderColor="white"
                    p={4}
                  >
                    <HStack alignItems="center" justifyContent="space-between">
                      <Box flex={1}>
                        <Box flex={1}>
                          <Heading fontSize="3xl" color="white">
                            Get Directions
                          </Heading>
                          <Text color="white" selectable={true} lineHeight={20}>
                            Riverside Cabins
                            {"\nStanwardine Lane\nShrewsbury, SY4 1HY"}
                          </Text>
                        </Box>
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
              <Text color="royalBlue" mb={4} lineHeight={22}>
                We want a wedding where we can all spend time together and make
                memories throughout. Therefore, all guests will be accommodated
                in a luxury cabin for the entire weekend.
              </Text>
              <Box bgColor="lightBlue" mx={-4} py={6} mb={4} px={4}>
                <Box
                  borderRadius={8}
                  borderWidth={1}
                  borderColor="royalBlue"
                  p={4}
                >
                  <Heading fontSize="3xl" color="royalBlue">
                    {currentParty?.cabin || ""}
                  </Heading>
                  <Text color="royalBlue" lineHeight={20}>
                    is your designated cabin.
                  </Text>
                </Box>
              </Box>
              <Text color="royalBlue" mb={4}>
                Each cabin has it's own bathroom, kitchen, hot tub and firepit,
                making your stay as comfortable as possible.
              </Text>
              <Box bgColor="darkBlue" px={4} py={6} mb={4} mx={-4}>
                <TouchableHighlight
                  style={{ borderRadius: 8 }}
                  underlayColor={theme.colors.royalBlue}
                  onPress={() => setSiteMap(true)}
                >
                  <Box
                    borderRadius={8}
                    borderWidth={1}
                    borderColor="white"
                    p={4}
                  >
                    <HStack alignItems="center" justifyContent="space-between">
                      <Box flex={1}>
                        <Box flex={1}>
                          <Heading fontSize="3xl" color="white">
                            Site Map
                          </Heading>
                          <Text color="white" selectable={true} lineHeight={20}>
                            See a map of Riverside Cabins.
                          </Text>
                        </Box>
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
              <Text color="royalBlue" mb={2} lineHeight={22}>
                Please see the site map above to familiarise yourself with the
                site.
              </Text>
            </Box>
          </Box>
        </ScrollView>
      </Box>
      <Modal isOpen={sitemap}>
        <Box backgroundColor="background" flex={1}>
          <Image
            alt="sitemap"
            source={require("../../../assets/sitemap.png")}
            height={Dimensions.get("window").height}
            resizeMode="contain"
          />
          <Button
            position="absolute"
            variant="ghost"
            onPress={() => setSiteMap(false)}
            alignSelf="flex-start"
            top={4}
            left={0}
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
      </Modal>
    </>
  );

  return (
    <>
      <Box safeAreaTop bgColor="primary.500" flex={1}>
        <ScrollView>
          <Heading color="white" fontSize="6xl" mb={2} mx={4}>
            Venue
          </Heading>
          <Text color="white" mx={4} mb={4}>
            We have decided to hire out the entire site at the{" "}
            <Link
              _text={{
                color: "primary.200",
                textDecoration: "underline",
                fontFamily: "Body-Bold",
                fontSize: "md",
              }}
              href="https://www.riverside-cabins.co.uk/"
            >
              Riverside Cabins
            </Link>{" "}
            in Shropshire:
          </Text>
          <Box bgColor="background" px={4} py={6} mb={4}>
            <TouchableHighlight
              style={{ borderRadius: 8 }}
              underlayColor={theme.colors.primary[300]}
              onPress={onOpenInMaps}
            >
              <Box
                borderRadius={8}
                borderWidth={1}
                borderColor="primary.500"
                p={4}
              >
                <HStack alignItems="center" justifyContent="space-between">
                  <Box flex={1}>
                    <Heading fontSize="3xl" color="primary.500">
                      Get Directions
                    </Heading>
                    <Text color="primary.500" selectable={true} lineHeight={20}>
                      <Text fontFamily="Body-Bold">Riverside Cabins</Text>
                      {"\nStanwardine Lane\nShrewsbury, SY4 1HY"}
                    </Text>
                  </Box>
                  <Icon
                    color="primary.600"
                    size="2xl"
                    as={<MaterialCommunityIcons name="chevron-right" />}
                  />
                </HStack>
              </Box>
            </TouchableHighlight>
          </Box>
          <Text color="white" mx={4} mb={4}>
            We want the a wedding where we can all spend time together,
            therefore, all guests will be accommodated in a luxury cabin for the
            entire weekend <Text fontFamily="Body-Bold">FREE</Text> of charge.
          </Text>

          <Box bgColor="primary.100" px={4} py={6} mb={4}>
            <Box
              borderRadius={8}
              borderWidth={1}
              borderColor="primary.600"
              p={4}
            >
              <Heading fontSize="3xl" color="primary.600">
                {currentParty?.cabin || ""}
              </Heading>
              <Text color="primary.600">is your designated cabin.</Text>
            </Box>
          </Box>
          <Text color="white" mx={4} mb={4}>
            Each cabin has it's own bathroom, kitchen, hottub, firepit and bbq.
            Making your stay as comfortable as possible.
          </Text>

          <Box bgColor="background" px={4} py={6} mb={4}>
            <TouchableHighlight
              style={{ borderRadius: 8 }}
              underlayColor={theme.colors.primary[300]}
              onPress={() => setSiteMap(true)}
            >
              <Box
                borderRadius={8}
                borderWidth={1}
                borderColor="primary.500"
                p={4}
              >
                <HStack alignItems="center" justifyContent="space-between">
                  <Box flex={1}>
                    <Heading fontSize="3xl" color="primary.500">
                      Site Map
                    </Heading>
                    <Text color="primary.500" selectable={true} lineHeight={20}>
                      See a map of the riverside cabin site.
                    </Text>
                  </Box>
                  <Icon
                    color="primary.600"
                    size="2xl"
                    as={<MaterialCommunityIcons name="chevron-right" />}
                  />
                </HStack>
              </Box>
            </TouchableHighlight>
          </Box>
          <Text color="white" mx={4} mb={2}>
            Please see the site map above to know where you will be staying and
            to familiarise yourself with the site.
          </Text>
          <Box h="100px"></Box>
        </ScrollView>
      </Box>
    </>
  );
}
