import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

type Props = {
  about: string;
  url: string;
};

const FooterText: VFC<Props> = ({ about, url }) => (
  <NextLink href={url} passHref>
    <Link as="a" href="/">
      {about}
    </Link>
  </NextLink>
);
export default FooterText;
