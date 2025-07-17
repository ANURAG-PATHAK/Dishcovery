import "./global.css";
import '../nativewind-config';
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaView className="flex-1">
        <StatusBar style="dark" />
        <Slot />
      </SafeAreaView>
    </ClerkProvider>
  )
}
