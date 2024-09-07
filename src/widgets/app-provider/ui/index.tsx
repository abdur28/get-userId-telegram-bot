"use client";

import { createContext, useState, ReactNode } from "react";

interface AppContextType {
	isEyeClicked: boolean;
	setIsEyeClicked: React.Dispatch<React.SetStateAction<boolean>>;
	mainWalletId: number | null;
	setMainWallet: (walletId: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
	const [isEyeClicked, setIsEyeClicked] = useState<boolean>(false);
	const [mainWalletId, setMainWalletId] = useState<number | null>(null);

	const setMainWallet = (walletId: number) => {
		setMainWalletId(walletId);
		localStorage.setItem("mainWalletId", walletId.toString());
	};

	return (
		<AppContext.Provider
			value={{ isEyeClicked, setIsEyeClicked, mainWalletId, setMainWallet }}
		>
			{children}
		</AppContext.Provider>
	);
};
