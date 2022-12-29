import { FeaturePrivateGroup } from '../@types/groups';
import CompletarRegistro from '../screens/CompletarRegistro';
import Dashboard from '../screens/Dashboard';
import Onboarding from '../screens/Onboarding';

const privateFeatures: FeaturePrivateGroup = {
  Onboarding: {
    enabled: true,
    component: Onboarding,
  },
  CompletarRegistro: {
    enabled: true,
    component: CompletarRegistro,
  },
  Dashboard: {
    enabled: true,
    component: Dashboard,
  },
};

export default privateFeatures;
