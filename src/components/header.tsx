import React from "react";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/Link";
import "../app/App.css";

const Header = () => {
  return (
    <Heading bg="#FF8D5C" borderBottom="5px" borderBottomColor="whiteAlpha.800">
      <HStack w="100%" h="14" justifyContent="center" alignItems="center">
        <ChakraLink
          asChild
          position="absolute"
          size="2xl"
          letterSpacing="tight"
          flex="1"
          textAlign="center"
          fontFamily="Playwrite AU QLD"
        >
          <NextLink href="/">Oguto's Diary</NextLink>
        </ChakraLink>
        <ChakraLink asChild>
          <NextLink href="/articles/new">
            <Button
              bg="#f7f7f7"
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
          </NextLink>
        </ChakraLink>
      </HStack>
    </Heading>
  );
};

export default Header;
