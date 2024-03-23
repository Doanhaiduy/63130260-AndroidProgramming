import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PasswordGenerator from './src/screens/PasswordGenerator';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <PasswordGenerator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
