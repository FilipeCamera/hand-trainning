import { FeaturePrivateGroup } from '../@types/groups';
import CompletarRegistro from '../screens/CompletarRegistro';
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
};

export default privateFeatures;
