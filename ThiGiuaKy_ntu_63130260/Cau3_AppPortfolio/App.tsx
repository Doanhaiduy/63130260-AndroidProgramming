import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Portfolio from './src/screens/Portfolio';

export default function App() {
    return (
        <View>
            <StatusBar style='auto' />
            <Portfolio />
        </View>
    );
}
