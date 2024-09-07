import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
	subsets: ["latin"],
	weight: "600",
});

const consolas = localFont({ src: "./consolas.ttf" });

export const Fonts = {
	inter,
	consolas,
};
