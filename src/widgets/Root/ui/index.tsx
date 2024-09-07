"use client";

import React, { useEffect } from "react";
import "@/shared/styles/global.css";
import StyledComponentsRegistry from "@/app/registy";
import Container from "@/app-pages/styled";
import { usePathname } from "next/navigation";
import { AppProvider } from "@/widgets";
import { SDKProvider } from "@telegram-apps/sdk-react";
export const Root = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const isProfilePage = pathname === "/wallets-manage/profile";

	return (
		<SDKProvider>
			<AppProvider>
				<StyledComponentsRegistry>
					<Container>
						{/* <Header isProfilePage={isProfilePage} /> */}
						{children}
						{/* <BottomMenu /> */}
					</Container>
				</StyledComponentsRegistry>
			</AppProvider>
		</SDKProvider>
	);
};
