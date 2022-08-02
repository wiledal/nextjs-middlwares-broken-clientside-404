import { GetStaticProps } from "next";
import { getPage } from "./[...slug]";

export const getStaticProps: GetStaticProps = (context) => {
	const { page, settings } = getPage("error404");

	console.log("i am loading 404");

	return {
		props: {
			page,
			settings,
		},
	};
};

import Page from "./[...slug]";
export default Page;
