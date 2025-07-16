import { Stack } from "expo-router";
import "./global.css";
import '../nativewind-config';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  )
}
