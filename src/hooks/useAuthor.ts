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

  const getAuthorInfo = (authorName: Author) => ({
    authorIcon: authorIcons[authorName],
    authorName: authorNames[authorName],
  });

  const getAllAuthorInfo: () => ReturnType<typeof getAuthorInfo>[] = () =>
    Object.keys(authorIcons).map((authorName: Author) =>
      getAuthorInfo(authorName),
    ); // eslint-disable-line function-paren-newline

  return { getAuthorInfo, getAllAuthorInfo };
};

export default useAuthorInfo;
