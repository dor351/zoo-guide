import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AnimalsScreen from './screens/AnimalsScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          ...Platform.select({
            android: TransitionPresets.FadeFromBottomAndroid, // ✅ אנימציית כניסה הדרגתית באנדרואיד
            ios: TransitionPresets.ModalSlideFromBottomIOS, // ✅ החלקה מלמטה באייפון
            default: TransitionPresets.ScaleFromCenterAndroid, // ✅ מעבר זום בברירת מחדל
          }),
          gestureEnabled: true, // ✅ מאפשר החלקת מסכים עם מחוות
          headerShown: false, // ❌ מסתיר את כותרות המסכים
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animals" component={AnimalsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
