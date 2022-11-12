import React from 'react';

type CommonGroup = {
  enabled: boolean;
  component: React.FC<any>;
};

type PublicGroup = CommonGroup & {
  enabledMethod: {
    google: boolean;
    apple: boolean;
    facebook: boolean;
  };
};
type PrivateGroup = CommonGroup & {};

type ConfigGroup = PublicGroup;
type ConfigPrivateGroup = PrivateGroup;

type FeatureGroup = Record<string, ConfigGroup>;
type FeaturePrivateGroup = Record<string, ConfigPrivateGroup>;
