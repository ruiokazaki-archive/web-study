import { useRouter } from 'next/dist/client/router';

import { getBlogs, getTags } from 'libs/apiClient';
import { Blog, Category } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import { generatePage } from './index';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  category: Category;
  currentPage: string;
  tags: Tag[];
};

const Index: NextPage<Props> = ({ blogData, category, currentPage, tags }) => {
  const router = useRouter();

  return generatePage({ blogData, category, currentPage, tags, router });
};

export const getStaticPaths = async () => {
  const categories = ['design', 'engineer', 'column'];

  const microCMSBlogs = await getBlogs({ limit: 1000 });

  const paths: {
    params: { category: string; id: string };
  }[] = [];
  categories.forEach((category) => {
    const id = [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...new Array(
        Math.ceil(
          microCMSBlogs.contents.filter(
            (item) =>
              JSON.stringify(item.category) === JSON.stringify([category]),
          ).length / 12,
        ),
      ),
    ].map((_, i) => i + 1);

    id.forEach((i) => {
      paths.push({
        params: {
          id: String(i),
          category,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: Category; id: string };
}) => {
  const blogData = await getBlogs({
    category: params.category,
    pageNumber: Number(params.id),
  });

  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      category: params.category,
      currentPage: params.id,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
