import KinoshitaIcon from 'assets/authorIcon/KinoshitaIcon';
import KobayashiIcon from 'assets/authorIcon/KobayashiIcon';
import OkazakiIcon from 'assets/authorIcon/OkazakiIcon';
import RyouIcon from 'assets/authorIcon/RyouIcon';
import SatoIcon from 'assets/authorIcon/SatoIcon';
import SudaIcon from 'assets/authorIcon/SudaIcon';
import { Author } from 'types/blog';

const useAuthorInfo = () => {
  const authorIcons: { [key in Author]: (props) => JSX.Element } = {
    kinoshita: KinoshitaIcon,
    okazaki: OkazakiIcon,
    ryou: RyouIcon,
    sato: SatoIcon,
    suda: SudaIcon,
    kobayashi: KobayashiIcon,
  };
  const authorNames: { [key in Author]: string } = {
    kinoshita: 'きのしたゆうり',
    okazaki: 'おかざきるい',
    ryou: 'りょういっとん',
    sato: 'さとうまなみ',
    suda: 'すだゆうと',
    kobayashi: 'こばやしたいよう',
  };
  const authorAttributes: { [key in Author]: string } = {
    kinoshita: 'グラフィック',
    okazaki: 'フルスタック',
    ryou: 'フロントエンド',
    sato: 'フロントエンド・写真',
    suda: 'UI・情報設計',
    kobayashi: '色彩・服飾',
  };
  const authorTexts: { [key in Author]: string } = {
    kinoshita: '',
    okazaki: '',
    ryou: '',
    sato: 'フロントエンドと写真が好きなアイドルおたく',
    suda: '',
    kobayashi: '',
  };
  const authorTitles: { [key in Author]: string } = {
    kinoshita: `デザイナーの
きのぴた`,
    okazaki: `エンジニアの
るい！`,
    ryou: `エンジニアの
リョウだ！`,
    sato: `エンジニアの
さとうだよ`,
    suda: `デザイナーの
ｽﾀﾞﾕｳﾄ！`,
    kobayashi: `デザイナーの
タイヨーです。`,
  };
  const authorChats: { [key in Author]: string } = {
    kinoshita: 'デザイナーのきのぴたは絵描きのゲーム廃人学生ニート侍',
    okazaki: 'エンジニアのるい！言語をなんでも食べる雑食犬！',
    ryou: 'エンジニアのリョウだ！旅が生きがいの留学生！',
    sato: 'エンジニアのさとうだよ 写真を撮るおたく',
    suda: 'デザイナーのｽﾀﾞﾕｳﾄ！衛門。ドラクエをこよなく愛す',
    kobayashi: 'デザイナーのタイヨーです。ファッションリーダーだお',
  };
  const authorColors: { [key in Author]: string } = {
    kinoshita: '#FF87AC',
    okazaki: '#FFB727',
    ryou: '#2E6963',
    sato: '#B898E2',
    suda: '#3D78D8',
    kobayashi: '#FF8B2C',
  };
  const fvAuthorImgs: { [key in Author]: string } = {
    kinoshita:
      'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/6c1e80182786492caaea5603168f9b39/FvKinoshita.png',
    okazaki:
      'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/b3c2c8b2e44f4cb0bac612ff9bbf5700/FvOkazaki.png',
    ryou: 'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/7bdd58df9a0d4be280115980be648dcf/FvRyou.png',
    sato: 'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/89d25d92348a4bc890c39e49b91bb93f/FvSato.png',
    suda: 'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/4149f10708274102ab81c497d18f5c1e/FvSuda.png',
    kobayashi:
      'https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/06d06cec8b224b9fa6843e87a9c9062f/FvKobayashi.png',
  };

  const getAuthorInfo = (authorName: Author) => ({
    authorIcon: authorIcons[authorName],
    authorName: authorNames[authorName],
    authorAttribute: authorAttributes[authorName],
    authorText: authorTexts[authorName],
    authorTitle: authorTitles[authorName],
    authorChat: authorChats[authorName],
    authorColor: authorColors[authorName],
    fvAuthorImg: fvAuthorImgs[authorName],
  });

  const getAllAuthorInfo: () => ReturnType<typeof getAuthorInfo>[] = () =>
    Object.keys(authorIcons).map((authorName: Author) =>
      getAuthorInfo(authorName),
    ); // eslint-disable-line function-paren-newline

  return { getAuthorInfo, getAllAuthorInfo };
};

export default useAuthorInfo;
