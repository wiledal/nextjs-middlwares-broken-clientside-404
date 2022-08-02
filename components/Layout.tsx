import Link from "next/link";
import { FC, ReactNode } from "react";
import { Page, PageSettings } from "../types/page-types";

interface LayoutProps {
	children: ReactNode;
	settings: PageSettings;
}

export const Layout: FC<LayoutProps> = ({ children, settings }) => {
	return (
		<div>
			<nav>
				{settings.navigation.map((link) => (
					<Link href={link.path}>{link.label}</Link>
				))}
			</nav>
			<div>{children}</div>
		</div>
	);
};
