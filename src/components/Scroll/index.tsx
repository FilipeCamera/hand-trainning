import { ScrollView, ScrollViewProps } from 'react-native';

type ScrollProps = {
  children: any;
} & ScrollViewProps;

const Scroll = ({ children, ...props }: ScrollProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 16,
        alignItems: 'center',
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export { Scroll };
