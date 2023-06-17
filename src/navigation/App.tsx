import { useCallback, useEffect, useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useData, ThemeProvider } from '../hooks';
import { Button, Block, Text, Input } from '../components';

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const { isDark, theme, setTheme } = useData();

    /* set the status bar based on isDark constant */
    useEffect(() => {
        Platform.OS === 'android' && StatusBar.setTranslucent(true);
        StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
        return () => {
            StatusBar.setBarStyle('default');
        };
    }, [isDark]);

    // Function for loading the fonts
    const loadFonts = async () => {
        try {
            await Font.loadAsync({
                "Poppins-Thin": theme.assets.PoppinsThin,
                "Poppins-Black": theme.assets.PoppinsBlack,
                "Poppins-Bold": theme.assets.PoppinsBold,
                "Poppins-Light": theme.assets.PoppinsLight,
                "Poppins-Medium": theme.assets.PoppinsMedium,
                "Poppins-Regular": theme.assets.PoppinsRegular,
                "Poppins-SemiBold": theme.assets.PoppinsSemiBold,
                "Poppins-ExtraBold": theme.assets.PoppinsExtraBold,
            });
            // Set the state to indicate that the fonts have been loaded
            setFontsLoaded(true);
        } catch (error) {
            console.log("Error loading fonts: ", error);
        }
    };

    // Effect for preventing the splash screen from auto-hiding and loading the fonts
    useEffect(() => {
        SplashScreen.preventAutoHideAsync()
            .then(loadFonts)
            .catch((error) => {
                console.log("Error preventing splash screen from auto-hiding: ", error);
            });
    }, []);

    // Callback function for hiding the splash screen after the app layout has been completed
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // If the fonts have not loaded return null
    if (!fontsLoaded) {
        return null;
    }

    const navigationTheme = {
        ...DefaultTheme,
        dark: isDark,
        colors: {
            ...DefaultTheme.colors,
            border: 'rgba(0,0,0,0)',
            text: String(theme.colors.text),
            card: String(theme.colors.card),
            primary: String(theme.colors.primary),
            notification: String(theme.colors.primary),
            background: String(theme.colors.background),
        },
    };

    return (
        <ThemeProvider theme={theme} setTheme={setTheme} >
            <NavigationContainer onReady={onLayoutRootView} theme={navigationTheme}>
                <Block flex={1} safe marginHorizontal={20}>
                    <Block center>
                        <Text h5 center marginBottom={theme.sizes.sm}>Login to your account</Text>
                        <Input placeholder='Email' marginBottom={theme.sizes.sm} />
                        <Input placeholder='Password' marginBottom={theme.sizes.sm} />
                        <Text p center>Forget Password</Text>
                    </Block>
                    <Block>
                        <Button onPress={() => console.log('click')} radius={100} secondary>
                            <Text p white>Click</Text>
                        </Button>
                    </Block>
                </Block>
            </NavigationContainer>
        </ThemeProvider>
    );
}