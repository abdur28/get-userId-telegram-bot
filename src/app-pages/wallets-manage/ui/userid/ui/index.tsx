"use client";

// import { useInitData } from "@telegram-apps/sdk-react";
import { initInitData } from "@telegram-apps/sdk";
export const UserIdPage = () => {
	// const [userId, setUserId] = useState<number | null>();
	const initData: any = initInitData();

	return (
		<div>
			<p>User ID: {initData}</p>
		</div>
	);
};
