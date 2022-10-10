import React from "react";

type CommonGroup = {
  enabled: true;
  component: React.FC<any>;
};

type PublicGroup = CommonGroup & {
  enabledMethod: {
    google: false;
    apple: false;
    facebook: false;
  };
};
type PrivateGroup = CommonGroup & {};

type ConfigGroup = PublicGroup;
type ConfigPrivateGroup = PrivateGroup;

type FeatureGroup = Record<string, ConfigGroup>;
type FeaturePrivateGroup = Record<string, ConfigPrivateGroup>;
