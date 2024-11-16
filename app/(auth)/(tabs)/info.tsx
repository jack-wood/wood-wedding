import { Box, Heading, Image, ScrollView, Text } from "native-base";
import CollapsibleSection from "../../../components/CollapsibleSection";
import { useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function InfoScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <StatusBar style="light" translucent={true} />
      <Box bgColor="background" flex={1}>
        <ScrollView>
          <Box position="relative">
            <Image
              source={require("../../../assets/faqs_featured_image.png")}
              width={width}
              resizeMode="cover"
              height={height * 0.25}
              alt="feature_image"
            />
            <Box h="2700px" justifyContent="flex-end">
              <Text ml={4}>Scroll up.</Text>
            </Box>
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
                FAQs
              </Heading>
              <Heading mb={4} fontSize="lg" alignSelf="center">
                Answers to all of your questions
              </Heading>
              <Box mx={-4}>
                <CollapsibleSection
                  title="When is check-in/out?"
                  foregroundColor="white"
                  backgroundColor="darkBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      Check-in is from 3pm on Friday 23rd May and check-out is
                      at 10am Monday 26th May.{"\n\n"}We'd really appreciate you
                      spending the whole time with us, however, if this does not
                      work for you please let us know as soon as you can.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What should I wear?"
                  foregroundColor="royalBlue"
                  backgroundColor="lightBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      For the wedding day, we ask that you wear semi-formal
                      attire such as a dresses or dressy separates for women and
                      a suit and tie for men.{"\n\n"}As for the rest of the
                      weekend, wear whatever you like. Even hot tub speedos.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What's on the menu?"
                  foregroundColor="darkBlue"
                  backgroundColor="midBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      For our wedding breakfast we have hired a private chef to
                      prepare Lebanese inspired sharing boards.{"\n\n"}As our
                      accommodation is self-catered we recommend bringing some
                      food along with you for snacks, breakfasts and lunches.
                      {"\n\n"}We plan to cater the following meals for you:
                      {"\n\n"}- Wedding Dinner{"\n"}- Saturday Evening Pizza
                      {"\n"}- Sunday Brunch{"\n"}- Sunday Evening BBQ
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What about booze?"
                  foregroundColor="white"
                  backgroundColor="darkBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      We will be supplying wine, cider, beer and soft drinks on
                      the day of our wedding. If you would like any other
                      beverages, please bring these with you.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="Can I bring my dog?"
                  foregroundColor="royalBlue"
                  backgroundColor="lightBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      Whilst we love your pets, we kindly ask that you please do
                      not bring your dog.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What is there to do?"
                  foregroundColor="darkBlue"
                  backgroundColor="midBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      There is plenty to do at our venue such kayaking, paddle
                      boarding and wild swimming in the river or relaxing in
                      your private hot tub.{"\n\n"}Alternatively, you can
                      venture off site and browse the local farmshops or visit
                      the nearby towns of Oswestry and Shrewsbury.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What about gifts?"
                  foregroundColor="white"
                  backgroundColor="darkBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      Your presence at our wedding is enough, but, should you
                      wish to give a gift as well, cash to put towards our
                      honeymoon would be greatly appreciated.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="How can I help?"
                  foregroundColor="royalBlue"
                  backgroundColor="lightBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      As our venue isn't an official wedding venue, we are doing
                      everything ourselves from setting it all up to tidying it
                      all away, cooking meals and serving drinks.{"\n\n"}We
                      would massively appreciate it if everybody contributed
                      where they can. Report to Lottie for your task!
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What should I pack?"
                  foregroundColor="darkBlue"
                  backgroundColor="midBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      Here's a few of the things we think you should bring:
                      {"\n\n"}- Wedding Day outfit
                      {"\n"}- Comfortable clothes and footwear
                      {"\n"}- Swimwear & spare towel
                      {"\n"}- Food & drinks
                      {"\n"}- Slippers
                      {"\n"}- Toiletries
                      {"\n"}- Iron
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="What's in the cabins?"
                  foregroundColor="white"
                  backgroundColor="darkBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      Each cabin has cooking facilities. If you are allocated a
                      larger cabin, this will have a full kitchen with an oven,
                      hob, air fryer, dishwasher and full fridge freezer. If you
                      are allocated a smaller cabin, you will have a
                      kitchenette.{"\n\n"}All cabins have their own parking, hot
                      tubs, fire pits, bathrooms, televisions and WiFi.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box mx={-4}>
                <CollapsibleSection
                  title="When to RSVP by?"
                  foregroundColor="royalBlue"
                  backgroundColor="lightBlue"
                >
                  <Box px={6} pt={4} backgroundColor="background">
                    <Text color="royalBlue" mb={4} lineHeight={22}>
                      We kindly ask that you RSVP by 12th January 2025.
                    </Text>
                  </Box>
                </CollapsibleSection>
              </Box>
              <Box h="500px" />
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
