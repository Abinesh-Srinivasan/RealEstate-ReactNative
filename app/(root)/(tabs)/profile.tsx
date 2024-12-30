import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
const Profile = () => {
  interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
  }
  const SettingsItem = ({
    icon,
    title,
    onPress,
    textStyle,
    showArrow = true,
  }: SettingsItemProps) => (
    <TouchableOpacity
      onPress={onPress}
      className=" flex flex-row justify-between items-center py-3"
    >
      <View className=" flex flex-row items-center gap-3">
        <Image source={icon} className=" size-6" />
        <Text
          className={`${textStyle} text-lg text-black-300 font-rubik-medium`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className=" size-5" />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className=" h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName=" px-7 pb-32"
      >
        <View className=" flex flex-row items-center justify-center mt-5">
          <Text className=" text-lg font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className=" size-5" />
        </View>
        <View className=" flex flex-row justify-center">
          <View className=" flex flex-col items-center relative mt-5">
            <Image source={images.abinesh} className=" size-44 rounded-full" />
            <Text className=" text-2xl font-rubik-bold mt-2">
              Abinesh-Nesharo
            </Text>
          </View>
        </View>
        <View className=" flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        <View className=" flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            textStyle=" text-danger"
            showArrow={false}
            title="Logout"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
