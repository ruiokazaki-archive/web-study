import { ReactNode, VFC } from 'react';

import Footer from 'components/ui-parts/Footer';
import Head from 'components/ui-parts/Head';
import { Tag } from 'types/tag';

type Props = {
  tags: Tag[];
  children: ReactNode;
};

const Layout: VFC<Props> = ({ tags, children }) => (
  <>
    <Head />
    {children}
    <Footer tags={tags} />
  </>
);
export default Layout;
