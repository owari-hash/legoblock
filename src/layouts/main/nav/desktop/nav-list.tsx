import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavItemBaseProps } from '../types';

import { NavItem } from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ item }: { item: NavItemBaseProps }) {
  const pathname = usePathname();
  const active = useActiveLink(item.path, false);
  const externalLink = item.path.includes('http');

  return <NavItem item={item} active={active} externalLink={externalLink} />;
}
