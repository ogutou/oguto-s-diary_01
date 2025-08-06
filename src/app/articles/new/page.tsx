import React from "react";
import {
  Box,
  Input,
  Button,
  HStack,
  Heading,
  Card,
  Text,
  Image,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/Link";

const CreateDiaryPage = () => {
  return (
    <Box>
      <Input placeholder="入力" />
      <Input placeholder="入力" />
    </Box>
  );
};

export default CreateDiaryPage;
