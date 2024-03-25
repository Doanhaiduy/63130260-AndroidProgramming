import { StatusBar } from 'expo-status-bar';
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
