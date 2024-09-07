"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";

const slideDown = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0); 
  }
  100% {
    transform: translateY(100%);
  }
`;

export const UserImg = styled(Image)`
	object-fit: cover;
	border-radius: 50%;
	width: 100%;
	height: 100%;
`;

export const Container = styled.div<{ $isClosing?: boolean }>`
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	background-color: rgba(14, 14, 14, 0.97);
	position: absolute;
	width: 100%;
	min-height: 90dvh;
	border: 1px solid white;
	overflow: hidden;

	&.create-groups {
		z-index: 2;
		animation: ${({ $isClosing }) => ($isClosing ? slideUp : slideDown)} 0.5s
			ease forwards;
		margin-top: -150px;
	}

	&.ct-wallet {
		margin-top: 20px;
		position: static;
	}
`;
