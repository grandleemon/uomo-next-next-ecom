import { ReactNode } from "react";
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Header } from "@/widgets/header";
import './globals.scss'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

interface Props {
	children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
		<body className={jost.className}>
		<Header/>
		{children}
		<div id="root-portal"/>
		</body>
		</html>
	)
}
