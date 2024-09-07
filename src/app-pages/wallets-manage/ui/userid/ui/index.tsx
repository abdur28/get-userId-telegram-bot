"use client";

import { useInitData } from "@telegram-apps/sdk-react";

export const UserIdPage = () => {
	// const [userId, setUserId] = useState<number | null>();
	const initData: any = useInitData();

	return (
		<div>
			<p>User ID: {initData}</p>
		</div>
	);
};
