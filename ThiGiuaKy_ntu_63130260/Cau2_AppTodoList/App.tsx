import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './src/screens/Todo';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Todo />
            </View>
        </Provider>
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
