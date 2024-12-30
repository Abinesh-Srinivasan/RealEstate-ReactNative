import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
import icons from "@/constants/icons";
const TabsLayout = () => {
  const TabIcon = ({
    focused,
    icon,
    title,
  }: {
    focused: boolean;
    icon: any;
    title: string;
  }) => (
    <View className=" flex flex-col items-center mt-3 flex-1">
      <Image
        source={icon}
        tintColor={focused ? "#0061ff" : "666876"}
        resizeMode="contain"
        className=" size-6"
      />
      <Text
        className={`${
          focused
            ? " text-primary-300 font-rubik-medium"
            : " font-rubik text-black-200"
        } text-xs text-center mt-1 w-full`}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopWidth: 1,
          minHeight: 70,
          borderTopColor: "#0061FF1A",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home2} focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
