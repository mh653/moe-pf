import { Noto_Sans_JP, Bellota_Text } from "next/font/google";

export const noto = Noto_Sans_JP({
  weight: ["400", "700"],//variableフォントではないので、使う太さを決めてDLする
  subsets: ["latin"],
  display: "swap",//最初はシステムフォントで表示し、フォントが読み込まれた瞬間に差し替える
  variable: "--font-noto", // CSS変数名
});

export const bellota = Bellota_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellota"
});
