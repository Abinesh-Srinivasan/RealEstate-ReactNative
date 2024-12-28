import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";
const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
};
export default Property;
