import { _pricingHome } from 'src/_mock/_pricing';
import PricingHome from '../home/pricing-home';

export default function ProductView() {
  return <PricingHome plans={_pricingHome} />;
}
