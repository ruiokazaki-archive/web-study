import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Blog } from 'types/blog';

import ArticleHead from './index';

export default {
  title: 'ui-elements/ArticleHead',
  component: ArticleHead,
} as ComponentMeta<typeof ArticleHead>;

const data: Blog = {
  id: 'k7mvmlxxdufu',
  createdAt: '2022-06-02T02:25:35.963Z',
  updatedAt: '2022-06-02T02:25:35.963Z',
  publishedAt: '2022-06-02T02:25:35.963Z',
  revisedAt: '2022-06-02T02:25:35.963Z',
  title: '色はなぜ見えるのか?',
  thumbnail: {
    url: 'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/33d21c3ea86144eb9dc4c22efac68265/%E8%89%B2%E3%81%AF%E3%81%AA%E3%81%9B%E3%82%99%E8%A6%8B%E3%81%88%E3%82%8B%E3%81%AE%E3%81%8B%E3%82%B5%E3%83%A0%E3%83%8D.jpg',
    height: 670,
    width: 1280,
  },
  author: ['kobayashi'],
  recommend: false,
  category: ['design'],
  tags: [
    {
      id: '054kgd2osn',
      createdAt: '2022-06-02T02:14:28.177Z',
      updatedAt: '2022-06-02T02:14:28.177Z',
      publishedAt: '2022-06-02T02:14:28.177Z',
      revisedAt: '2022-06-02T02:14:28.177Z',
      nameEn: 'color',
      nameJa: '色彩',
    },
  ],
  body: '<p>皆さんは色がなぜ見えているのかご存知ですか？<br>りんごが赤く見えるのはりんごが赤いから？<br>もし、リンゴが赤色を出しているのなら、真っ暗闇でもリンゴは赤く見えるはずです。しかし、実際は真っ暗闇ではリンゴは見えません。<br>ではどうやってりんごは赤く見えているのでしょうか。<br><img src="https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/d3bd1e17c1ec49d2951331890d2f51f6/%E3%82%8A%E3%82%93%E3%81%93%E3%82%99.jpg" alt=""><br></p><h3 id="hfd2abfbd8e">色を見るために必要な3つの要素</h3><p>色を見るためには<strong>「光源」「物体」「視覚(眼)」</strong>の三つの要素が必要で、目で受け取った情報を脳で処理して、はじめて色を認識することができます。<br><img src="https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/6426f3c881dd4924b320121e50ee82ba/%E8%89%B2%E3%82%92%E8%A6%8B%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E4%B8%89%E8%A6%81%E7%B4%A0.png" alt=""><br><span style="color:#222222;font-size: 0.75em">　　　　　　　　　　　　　色を見るための3つの要素</span><br><br><span style="color:#222222">先程のりんごの話に戻ります。</span><br><span style="color:#222222">まず、リンゴが赤く見えるためには光が必要。光には、すべての色が含まれています。光がリンゴに当たったとき、リンゴは多くの光を吸収します。その中で、赤の光だけを反射しているのです。そして、その赤の光が私達の目に入ったとき、「このリンゴは赤い」と認識できるのです。</span><br><span style="color:#222222">つまり、リンゴの表面に赤い色がついているわけではありません。リンゴの表面には「赤い光を反射する性質」があるのです。</span><br><img src="https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/217ad77ac0c24beba7d41520ae13184f/%E3%82%8A%E3%82%93%E3%81%93%E3%82%99%E3%81%8B%E3%82%99%E8%B5%A4%E3%81%8F%E8%A6%8B%E3%81%88%E3%82%8B%E7%90%86%E7%94%B1.png" alt=""><br><span style="color:#222222;font-size: 0.75em">　　　　　　　　　　　　　りんごが赤く見える理由</span><br></p><h3 id="h3bcda3e6b0">最後に</h3><p>簡単にまとめると、色を見るためには<strong>「光源」「物体」「視覚(眼)」</strong>の三つの要素が必要で物体自体が色を発しているのではなく物体に反射された光の色が目に入り、色が見えていると言うことになります。<br><br></p>',
};

export const Default1: ComponentStory<typeof ArticleHead> = () => (
  <ArticleHead data={data} />
);
