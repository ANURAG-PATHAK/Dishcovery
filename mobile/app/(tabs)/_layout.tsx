import { useAuth } from '@clerk/clerk-expo'
import { Stack, Redirect } from 'expo-router'

const TabLayout = () => {
    const { isSignedIn } = useAuth();
    if (!isSignedIn) return <Redirect href={'/(auth)/sign-in'} />
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    )
}

export default TabLayout