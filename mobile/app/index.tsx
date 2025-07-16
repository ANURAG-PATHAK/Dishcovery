import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex h-screen items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        className="w-72 h-48 mt-4 rounded-lg"
      />
      <Link href="/about" className="mt-4 text-blue-500">
        Go to About
      </Link>
    </View>
  );
}
