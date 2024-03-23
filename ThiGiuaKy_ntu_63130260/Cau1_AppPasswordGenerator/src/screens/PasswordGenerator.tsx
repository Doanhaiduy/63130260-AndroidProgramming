import { View, Text, Switch, TouchableOpacity, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';

type Props = {};

const PasswordGenerator = (props: Props) => {
    const [password, setPassword] = useState('GeneratePassword');
    const [loading, setLoading] = useState(false);
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const handleCopyPassword = async () => {
        await Clipboard.setStringAsync(password);
        Alert.alert('Success', 'Password copied to clipboard', [{ text: 'OK' }]);
    };

    const handleGeneratePassword = () => {
        setLoading(true);
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            Alert.alert('Error', 'Please select at least one option', [{ text: 'OK' }]);
            return;
        }
        let charset = '';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setTimeout(() => {
            setLoading(false);
            setPassword(password);
        }, 500);
    };

    return (
        <SafeAreaView className='flex-1 bg-[#0a0e31] w-full items-center justify-center '>
            <StatusBar style='light' />
            <Text className='text-[26px] font-bold text-white '>Password Generator</Text>
            <TouchableOpacity
                onPress={handleCopyPassword}
                className='mt-12 bg-[#1d2141] w-[90%] p-6 text-center rounded-xl'
            >
                <Text className='text-center text-white text-[20px]'>{password}</Text>
            </TouchableOpacity>
            <View className='mt-4 w-full items-center'>
                <Text className='uppercase text-[#999] font-medium self-start ml-[7%]'>
                    length: <Text className='text-white'>{length}</Text>
                </Text>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-6 text-center rounded-xl flex-row items-center'>
                    <Text className='text-white text-base pr-4'>6</Text>
                    <View className='flex-1'>
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={6}
                            maximumValue={30}
                            minimumTrackTintColor='#989898'
                            maximumTrackTintColor='#000000'
                            value={length}
                            onValueChange={(value) => setLength(Math.round(value))}
                        />
                    </View>
                    <Text className='text-white text-base pl-4'>30</Text>
                </View>
            </View>
            <View className='mt-4 w-full items-center'>
                <Text className='uppercase text-[#999] font-medium self-start ml-[7%]'>Setting</Text>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Uppercase</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={includeUppercase ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                        onValueChange={(value) => {
                            setIncludeUppercase(value);
                        }}
                        value={includeUppercase}
                    />
                </View>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Lowercase</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={includeLowercase ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                        onValueChange={(value) => {
                            setIncludeLowercase(value);
                        }}
                        value={includeLowercase}
                    />
                </View>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Numbers</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={includeNumbers ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                        onValueChange={(value) => {
                            setIncludeNumbers(value);
                        }}
                        value={includeNumbers}
                    />
                </View>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Symbols</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={includeSymbols ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                        onValueChange={(value) => {
                            setIncludeSymbols(value);
                        }}
                        value={includeSymbols}
                    />
                </View>
            </View>
            <TouchableOpacity
                className='w-[90%] items-center justify-center rounded-xl bg-[#6778e2] py-4 mt-8'
                onPress={handleGeneratePassword}
            >
                {loading ? (
                    <ActivityIndicator color='#fff' />
                ) : (
                    <Text className='text-white font-semibold text-[18px] uppercase'>Generate Password</Text>
                )}
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PasswordGenerator;
