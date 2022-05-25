import { ReactNode, VFC } from 'react';

type Props = {
  children?: ReactNode;
  title: string;
};

const CardListTitle: VFC<Props> = ({ title }) => <p>{title}</p>;
export default CardListTitle;
