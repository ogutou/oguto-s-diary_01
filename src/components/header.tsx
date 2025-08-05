import React from "react";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading bg="#FF8D5C">
      <HStack w="100%" h="14" justifyContent="center" alignItems="center">
        <Heading
          size="2xl"
          letterSpacing="tight"
          flex="1"
          textAlign="center"
          position="absolute"
          fontFamily="Playwrite AU QLD"
        >
          Oguto's Diary
        </Heading>
        <Button
          bg="#FFFFFF"
          color="black"
          size="sm"
          mr="20px"
          variant="subtle"
          position="absolute"
          right="20px"
          _hover={{
            bg: "#FFFFFF",
            transform: "scale(0.95)",
            boxShadow: "md",
          }}
        >
          投稿
        </Button>
      </HStack>
    </Heading>
  );
};

export default Header;
