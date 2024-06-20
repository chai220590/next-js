import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Chakra_Petch as FontChakraPetch,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontChakraPetch = FontChakraPetch({
  subsets: ["latin"],
  variable: "--font-chakra-petch",
  weight: "300",
});
