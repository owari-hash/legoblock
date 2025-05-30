import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

interface RouterLinkProps extends LinkProps {
  href: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(({ href, ...other }, ref) => (
  <Link ref={ref} href={href} {...other} />
));

RouterLink.displayName = 'RouterLink';

export default RouterLink;
