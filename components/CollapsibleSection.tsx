import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack, Heading, Icon, useTheme } from "native-base";
import React, { useState } from "react";
import { TouchableHighlight } from "react-native";

interface Props {
  title: string;
  children: React.ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({
  title,
  backgroundColor,
  foregroundColor,
  children,
  defaultOpen,
}: Props) => {
  const [open, setOpen] = useState(defaultOpen || false);

  const theme = useTheme();

  return (
    <Box>
      <TouchableHighlight
        onPress={() => setOpen(!open)}
        underlayColor={theme.colors.midBlue}
      >
        <Box bgColor={backgroundColor} py={4} pl={4} pr={2}>
          <HStack flex={1} justifyContent="space-between" alignItems="center">
            <Heading color={foregroundColor} fontSize="2xl">
              {title}
            </Heading>
            <Icon
              size="3xl"
              color={foregroundColor}
              as={
                <MaterialCommunityIcons
                  name={`chevron-${open ? "up" : "down"}`}
                />
              }
            />
          </HStack>
        </Box>
      </TouchableHighlight>
      {open ? children : null}
    </Box>
  );
};

export default CollapsibleSection;
