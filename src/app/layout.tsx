import React from "react";
import type { Metadata } from "next";

import "@/shared/styles/global.css";
import { Root } from "@/widgets";

export const metadata: Metadata = {
	title: "WalletApp",
	description: "WalletApp - for manage ur wallets",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Root>{children}</Root>
			</body>
		</html>
	);
}
