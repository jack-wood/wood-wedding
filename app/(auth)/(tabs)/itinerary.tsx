import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  StatusBar,
  Text,
  useTheme,
} from "native-base";
import { useWindowDimensions } from "react-native";
import CollapsibleSection from "../../../components/CollapsibleSection";

import { Link } from "expo-router";

export default function ItineraryScreen() {
  const { width, height } = useWindowDimensions();
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box bgColor="background" flex={1}>
        <ScrollView>
          <Box position="relative">
            <Image
              source={require("../../../assets/itinerary_featured_image.png")}
              width={width}
              resizeMode="cover"
              height={height * 0.25}
              alt="feature_image"
            />
            <Box h="2250px" />
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
                Order of Events
              </Heading>
              <Heading mb={4} fontSize="lg" alignSelf="center">
                Outline of the weekend plans
              </Heading>

              {/* Friday */}
              <Box mx={-4}>
                <CollapsibleSection
                  title="Friday: Prep Day"
                  backgroundColor="lightBlue"
                  foregroundColor="royalBlue"
                  defaultOpen={true}
                >
                  <>
                    <HStack mb={4} ml={6} mr={4} mt={4}>
                      <Box
                        w="3px"
                        bgColor="royalBlue"
                        height="111%"
                        mt={2}
                        mr={4}
                      />
                      <Box flex={1}>
                        <Text fontWeight="bold" color="royalBlue" mb={1}>
                          3:00 pm: Check-in
                        </Text>
                        <Text color="royalBlue" lineHeight={22}>
                          If you would like to help us with setting up the day
                          before, first of all thank you!{"\n\n"}Feel free to
                          arrive from 3:00pm to check into your riverside cabin.
                          Please see the{" "}
                          <Link href="/venue">
                            <Text
                              style={{
                                fontFamily: "Body-Bold",
                                color: theme.colors.midBlue,
                                textDecorationLine: "underline",
                              }}
                            >
                              venue information
                            </Text>
                          </Link>{" "}
                          for your assigned cabin.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack mb={4} ml={6} mr={4}>
                      <Box
                        w="3px"
                        bgColor="royalBlue"
                        height="91%"
                        mt={2}
                        mr={4}
                      />
                      <Box flex={1}>
                        <Text fontWeight="bold" color="royalBlue" mb={1}>
                          3:00 pm - Late: Prep
                        </Text>
                        <Text color="royalBlue" lineHeight={22}>
                          Once you have settled in, feel free to give us a hand
                          with ther preperations for our wedding. Please note
                          that this day will be self catered.
                        </Text>
                      </Box>
                    </HStack>
                  </>
                </CollapsibleSection>
              </Box>

              {/* Saturday */}
              <Box mx={-4}>
                <CollapsibleSection
                  title="Saturday: Wedding Day"
                  backgroundColor="midBlue"
                  foregroundColor="darkBlue"
                  defaultOpen={true}
                >
                  <HStack mb={4} ml={6} mr={4} mt={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="130%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        11:00 am - 2:00 pm: Getting ready
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Have a relaxed morning before getting dressed up for our
                        wedding ceremony.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="125%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        2:00 pm: Ceremony
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Please arrive at the ceremony area by 1:45 pm where the
                        Groom and his Best Man will show you to your seat. The
                        ceremony will start at 2 pm.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="125%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        2:30 pm - 4:00 pm: Bubbles & Snaps
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Whilst the Bride and Groom pose around the site, please
                        enjoy a glass of Shropshire English Sparkling Wine.
                        There will be snacks and lawn games to keep you occupied
                        until we return for group photos.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="125%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        4:00 pm: Wedding Dinner
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Join us at The Nest for a Lebanese inspired menu cooked
                        on the site's firepit by chef Matt.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="125%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        5:00 pm: Cake cutting
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        The newlyweds will now cut the wedding cake and open up
                        the dessert table with tea and coffee.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="130%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        6:00 pm - Late: Party
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Continue from the meal with music and drinks. The inside
                        of The Nest will be our dancefloor.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="87%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        9:00 pm: Soak up the booze
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Local foodtruck Pizza Box will be delivering pizzas to
                        the site for a late night feast.
                      </Text>
                    </Box>
                  </HStack>
                </CollapsibleSection>
              </Box>

              {/* Sunday */}
              <Box mx={-4}>
                <CollapsibleSection
                  title="Sunday: Fun day"
                  backgroundColor="darkBlue"
                  foregroundColor="white"
                  defaultOpen={true}
                >
                  <HStack mb={4} ml={6} mr={4} mt={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="115%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        10:30 am: Post-wedding Brunch
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Shake off the hangover with a communal breakfast in The
                        Smokehouse outdoor kitchen. We will provide produce for
                        us all to chip in with cooking it up.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="130%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        12:00 pm - 6:00 pm: Anything goes
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Kayak on the river, soak in your private hot tub or
                        explore glourious Shropshire, the day is yours.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="130%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        6:00 pm: BBQ
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Let's fire up The Smokehouse grill and cook up some
                        burgers together.
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mb={4} ml={6} mr={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="90%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        8:00 pm: Outdoor cinema
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        We will be turning The Quarry into an outdoor cinema for
                        the evening. The popcorn's on us!
                      </Text>
                    </Box>
                  </HStack>
                </CollapsibleSection>
              </Box>

              {/* Monday */}
              <Box mx={-4}>
                <CollapsibleSection
                  title="Monday: Farewells"
                  backgroundColor="lightBlue"
                  foregroundColor="royalBlue"
                  defaultOpen={true}
                >
                  <HStack mb={4} ml={6} mr={4} mt={4}>
                    <Box
                      w="3px"
                      bgColor="royalBlue"
                      height="90%"
                      mt={2}
                      mr={4}
                    />
                    <Box flex={1}>
                      <Text fontWeight="bold" color="royalBlue" mb={1}>
                        10:00 am: Check out
                      </Text>
                      <Text color="royalBlue" lineHeight={22}>
                        Thank you for celebrating our special weekend with us,
                        we hope you enjoyed it. Time to pack up and head out,
                        safe journey home.
                      </Text>
                    </Box>
                  </HStack>
                </CollapsibleSection>
              </Box>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
