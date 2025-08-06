import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import { Link } from "@chakra-ui/next-js";
import { extendTheme } from "@chakra-ui/react";
// import Header from "@/components/header";
import DiaryList from "@/components/diaryList";

export default function Page() {
  return (
    <Box>
      {/* <Header /> */}
      <DiaryList />
    </Box>
  );
}
