import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-2xl my-5 font-rubik-light">Abinesh Srinivasan</Text>
      <Link href="/sign-in">Sign-in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/Properties/1">Property</Link>
    </View>
  );
}
