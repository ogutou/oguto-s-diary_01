"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import "./App.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute="class"
        disableTransitionOnChange
        defaultTheme="light"
        forcedTheme="light"
      >
        <Header />
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
