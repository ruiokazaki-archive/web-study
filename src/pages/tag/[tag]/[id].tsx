import { useRouter } from 'next/router';

import { getBlogs, getTags, getTagsIdByName } from 'libs/apiClient';
import { Blog } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import { generatePage } from './index';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  tagName: Tag;
  currentPage: string;
  tags: Tag[];
};

const Index: NextPage<Props> = ({ blogData, tagName, currentPage, tags }) => {
  const router = useRouter();

  return generatePage({ blogData, tagName, currentPage, tags, router });
};

export const getStaticPaths = async () => {
  const microCMSTags = await getTags();
  const microCMSBlogs = await getBlogs({ limit: 1000 });

  const paths: {
    params: { tag: string; id: string };
  }[] = [];

  microCMSTags.contents.forEach((tag) => {
    const id = [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...new Array(
        Math.ceil(
          microCMSBlogs.contents.filter(
            (item) =>
              item.tags.filter((itemTag) => itemTag.id === tag.id).length !== 0,
          ).length / 12,
        ),
      ),
    ].map((_, i) => i + 1);

    id.forEach((i) => {
      paths.push({
        params: {
          id: String(i),
          tag: tag.nameEn,
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
  params: { tag: Tag['nameEn']; id: string };
}) => {
  const microCMSTag = await getTagsIdByName(params.tag);

  const blogData = await getBlogs({
    tagId: microCMSTag.contents[0].id,
    pageNumber: Number(params.id),
  });

  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      tagName: microCMSTag.contents[0],
      currentPage: params.id,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
