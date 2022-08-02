import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { FC } from "react";
import { Layout } from "../components/Layout";
import { Page, PageSettings } from "../types/page-types";

const simulateApiFetchPageSettings = (): PageSettings => {
	return {
		navigation: [
			{
				label: "Home",
				path: "/",
			},
			{
				label: "About",
				path: "/about",
			},
			{
				label: "Blog",
				path: "/blog",
			},
		],
	};
};

const simulateApiFetchPage = (slug): Page | null => {
	return (
		{
			frontpage: {
				title: "Front page!",
			},
			error404: {
				title: "404!",
			},
			about: {
				title: "About page",
			},
			// blog: {
			// 	title: "Ya here is cool blogs!",
			// },
		}[slug] || null
	);
};

export const getPage = (slug) => {
	const settings = simulateApiFetchPageSettings();
	const page = simulateApiFetchPage(slug);

	return { page, settings };
};

export const getStaticProps: GetStaticProps<{}, { slug: string[] }> = (
	context
) => {
	const slug = context.params!.slug.join("/");
	const { page, settings } = getPage(slug);

	if (!page) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			page,
			settings,
		},
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

interface PageComponent {
	page: Page;
	settings: PageSettings;
}
const Page: FC<PageComponent> = ({ page, settings }) => {
	return (
		<Layout settings={settings}>
			<h1>This is the page: {page.title}</h1>
		</Layout>
	);
};

export default Page;
