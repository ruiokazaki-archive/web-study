import { ReactNode, VFC } from 'react';

import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
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
    <OriginalSpacer size="80px" />
    <Footer tags={tags} />
    <OriginalSpacer size="32px" />
  </>
);
export default Layout;
