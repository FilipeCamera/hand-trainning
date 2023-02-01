import React from 'react';
import Home from '../screens/Home';
import { SvgProps } from 'react-native-svg';
import {
  AnilhaIconDisable,
  AnillhaIcon,
  HomeIcon,
  HomeIconDisable,
  PeopleAddDisableIcon,
  PeopleAddIcon,
  ProfileDisableIcon,
  ProfileIcon,
} from '../constants';
import Trainning from '../screens/Trainning';
import AddTrainner from '../screens/AddTrainner';
import Profile from '../screens/Profile';

type TabsFeature = {
  name: string;
  icon?: React.FC<SvgProps>;
  iconDisable?: React.FC<SvgProps>;
  component: React.FC<any>;
}[];

const CommonFeatures: TabsFeature = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
    iconDisable: HomeIconDisable,
  },
  {
    name: 'Treino',
    component: Trainning,
    icon: AnillhaIcon,
    iconDisable: AnilhaIconDisable,
  },
  {
    name: 'Add Treinador',
    component: AddTrainner,
    icon: PeopleAddIcon,
    iconDisable: PeopleAddDisableIcon,
  },
  {
    name: 'Perfil',
    component: Profile,
    icon: ProfileIcon,
    iconDisable: ProfileDisableIcon,
  },
];

const TrainnerFeatures: TabsFeature = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
    iconDisable: HomeIconDisable,
  },
];

export { CommonFeatures, TrainnerFeatures, TabsFeature };
