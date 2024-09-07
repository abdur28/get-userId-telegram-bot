"use client";

import styled from "styled-components";

import { Fonts } from "@/shared/fonts/fonts";

const { inter } = Fonts;

export const Container = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	border-top: 0.5px solid white;
	border-right: 0.5px solid white;
	border-left: 0.5px solid white;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	height: 100dvh;
	width: 100%;
	margin-top: 15px;
	position: relative;
`;
export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 7px 39px 0;
`;

export const ImageBox = styled.div`
	width: 36px;
	height: 36px;
	background-color: #121212;
	border-radius: 50%;
	box-shadow: 0 5px 3.5px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const BaseText = styled.div`
	font-family: ${inter.style.fontFamily};
	font-weight: 600;
	letter-spacing: 1.5px;
	color: white;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 7px 7px 0;
	margin-top: 4px;

	&:nth-child(3) {
		gap: 20px;
		overflow-y: auto;
		padding: 7px 0 7px 7px;

		&::-webkit-scrollbar {
			width: 2px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #888;
			border-radius: 4px;
		}

		scrollbar-width: thin;
		scrollbar-color: transparent transparent;
	}
`;

export const WGBox = styled.div`
	display: flex;
	align-items: center;
	border-right: 23px;
	min-height: 47px;
	max-width: 480px;
	width: 100%;
	border-radius: 23.5px;
	justify-content: space-between;
	box-shadow: 0 6px 15.2px rgba(0, 0, 0, 0.86);
	padding: 0 22px 0 5px;
	position: relative;
	background-color: #0e0e0e;

	&.transaction {
		cursor: pointer;
	}

	&.group {
		margin-top: 20.5px;
		z-index: 2;

		&.m-0 {
			margin-top: 0;
		}
	}

	&.group-back {
		margin-top: -38px;
		z-index: 0;

		&.second {
			z-index: -1;
			margin-top: -38px;
		}
	}

	&.group-modal {
		cursor: pointer;
		&:nth-child(n + 3) {
			opacity: 0.5;
		}
	}
`;
export const TitleTextBox = styled.div`
	display: flex;
	gap: 5px;
`;
export const ImgBox = styled.div`
	display: flex;
`;

export const ManageBox = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

export const TitleImage = styled.div`
	width: 36px;
	height: 36px;
	background: #8effa7;
	border-radius: 50%;
`;

export const Title = styled.div`
	display: flex;
	gap: 6px;
`;

export const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const TitleText = styled(BaseText).attrs({ as: "h2" })`
	font-size: 16.43px;
`;

export const TitleNumber = styled(BaseText).attrs({ as: "p" })`
	font-size: 9.58px;

	&:first-of-type:before {
		content: "";
		position: absolute;
		margin-left: 69px;
		top: 22px;
		background-color: #0e0e0e;
		width: 16px;
		height: 20px;
		border-radius: 50%;
		filter: blur(1.8px);
	}
`;
