import { FeatureGroup } from "../@types/groups";
import Initial from "../screens/Initial";
import Login from "../screens/Login";
import Registrar from "../screens/Registrar";

const publicFeatures: FeatureGroup = {
  Initial: {
    enabled: true,
    component: Initial,
    enabledMethod: {
      google: false,
      apple: false,
      facebook: false,
    },
  },
  Registrar: {
    enabled: true,
    component: Registrar,
    enabledMethod: {
      google: false,
      apple: false,
      facebook: false,
    },
  },
  Login: {
    enabled: true,
    component: Login,
    enabledMethod: {
      google: false,
      apple: false,
      facebook: false,
    },
  },
};

export default publicFeatures;
