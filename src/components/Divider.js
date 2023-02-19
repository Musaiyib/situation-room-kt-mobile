import { View, Text } from "react-native";
import { theme } from "../core/theme";

const Divider = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", width: 350 }}>
      <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
      <Text
        style={{
          paddingHorizontal: 10,
          color: theme.colors.primary,
          fontSize: 16,
          fontWeight: "bold",
        }}
        {...props}
      />
      <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
    </View>
  );
};

export default Divider;
