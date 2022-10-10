import { ScrollView, ScrollViewProps } from "react-native";

interface ScrollProps extends ScrollViewProps {
  children: any;
}

export default function Scroll({ children, ...props }: ScrollProps) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 16,
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
}
