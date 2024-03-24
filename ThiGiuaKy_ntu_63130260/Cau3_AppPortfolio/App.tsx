import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Portfolio from './src/screens/Portfolio';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
    return (
        <GestureHandlerRootView>
            <StatusBar style='auto' />
            <Portfolio />
        </GestureHandlerRootView>
    );
}
