import { GetStaticProps } from "next";
import { getPage } from "./[...slug]";

export const getStaticProps: GetStaticProps = () => {
	const { page, settings } = getPage("frontpage");

	return {
		props: {
			page,
			settings,
		},
	};
};

import Page from "./[...slug]";
export default Page;
