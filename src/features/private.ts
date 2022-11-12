import { FeaturePrivateGroup } from '../@types/groups';
import Onboarding from '../screens/Onboarding';

const privateFeatures: FeaturePrivateGroup = {
  Onboarding: {
    enabled: false,
    component: Onboarding,
  },
};

export default privateFeatures;
