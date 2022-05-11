import aspida from '@aspida/fetch';

import api from 'apis/$api';
import { Category } from 'types/blog';

export const endPoint = process.env.MICROCMS_API_URL;
export const apiKey = process.env.MICROCMS_API_KEY;

if (endPoint === undefined) {
  throw new Error('環境変数に MICROCMS_API_URL をセットしてください');
}
if (apiKey === undefined) {
  throw new Error('環境変数に MICROCMS_API_KEY をセットしてください');
}

const config = {
  headers: {
    'X-MICROCMS-API-KEY': apiKey,
  },
};

const fetchClient = api(aspida(fetch, { baseURL: endPoint }));

const defaultValue = {
  limit: 12,
  offset: 0,
};

/**
 * ブログを取得する関数です。
 * 引数にフィルターの値を入れることができます。
 * default
 * limit: 12
 * offset: 0
 * @date 2022-05-11
 * @param { {
  limit?: number;
  offset?: number;
  tagId?: string;
  category?: Category;
}} parm1
 */
export const getBlogs = ({
  limit,
  offset,
  tagId,
  category,
}: {
  limit?: number;
  offset?: number;
  tagId?: string;
  category?: Category;
} = {}) => {
  // tagId と category が存在しない場合
  if (!tagId && !category) {
    return fetchClient.blogs.$get({
      config,
      query: {
        limit: limit || defaultValue.limit,
        offset: offset || defaultValue.offset,
      },
    });
  }

  // どちらも存在する場合
  if (tagId && category) {
    return fetchClient.blogs.$get({
      config,
      query: {
        limit: limit || defaultValue.limit,
        offset: offset || defaultValue.offset,
        filters: `tags[contains]${tagId}[and]category[contains]${category}`,
      },
    });
  }

  // tagIdが存在する場合はtagId, 存在しない場合はcategory検索をする
  return fetchClient.blogs.$get({
    config,
    query: {
      limit: limit || defaultValue.limit,
      offset: offset || defaultValue.offset,
      filters: tagId
        ? `tags[contains]${tagId}`
        : `category[contains]${category}`,
    },
  });
};
