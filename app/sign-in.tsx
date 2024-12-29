import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className=" bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className=" w-full h-4/6"
          resizeMode="contain"
        />
        <View className=" px-10">
          <Text className=" text-base text-center uppercase font-rubik text-black-200">
            Welcome to Nesharo Real Estate
          </Text>
          <Text className=" font-rubik-bold text-3xl mt-2 text-center text-black-300">
            Let's Get You Closer to{"\n"}
            <Text className=" text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className=" text-black-200 text-lg font-rubik mt-12 text-center">
            Login to ReEstate with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className=" bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className=" flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className=" w-5 h-5"
                resizeMode="contain"
              />
              <Text className=" text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
