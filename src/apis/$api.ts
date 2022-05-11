import { dataToURLString } from 'aspida';

import type { Methods as Methods0 } from './blogs';
import type { Methods as Methods1 } from './blogs/_blogId@string';
import type { Methods as Methods2 } from './news';
import type { Methods as Methods3 } from './news/_newsId@string';
import type { Methods as Methods4 } from './tags';
import type { AspidaClient } from 'aspida';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/blogs';
  const PATH1 = '/news';
  const PATH2 = '/tags';
  const GET = 'GET';

  return {
    blogs: {
      _blogId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(
              prefix,
              prefix1,
              GET,
              option,
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      get: (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) => fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods0['get']['query'] }
          | undefined,
      ) =>
        `${prefix}${PATH0}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    news: {
      _newsId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(
              prefix,
              prefix1,
              GET,
              option,
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      get: (
        option?:
          | {
              query?: Methods2['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) => fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (
        option?:
          | {
              query?: Methods2['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods2['get']['query'] }
          | undefined,
      ) =>
        `${prefix}${PATH1}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    tags: {
      get: (
        option?:
          | {
              query?: Methods4['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) => fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (
        option?:
          | {
              query?: Methods4['get']['query'] | undefined;
              config?: T | undefined;
            }
          | undefined,
      ) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods4['get']['query'] }
          | undefined,
      ) =>
        `${prefix}${PATH2}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
