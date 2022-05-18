import { VFC } from 'react';

type Props = {
  color: string;
};

const Header: VFC<Props> = ({ color }) => <h1 style={{ color }}>test</h1>;
export default Header;
