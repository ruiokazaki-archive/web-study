import { useRouter } from 'next/router';

import { getBlogs, getTags } from 'libs/apiClient';
import { Blog } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import { generatePage } from '.';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  currentPage: string;
  tags: Tag[];
};

const Index: NextPage<Props> = ({ blogData, currentPage, tags }) => {
  const router = useRouter();

  return generatePage({ blogData, currentPage, tags, router });
};

export const getStaticPaths = async () => {
  const microCMSBlogs = await getBlogs();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ary = [...new Array(Math.ceil(microCMSBlogs.totalCount / 12))].map(
    (_, i) => i + 1,
  );

  const paths = ary.map((i) => ({
    params: { id: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const blogData = await getBlogs({
    pageNumber: Number(params.id),
  });

  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      currentPage: params.id,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
