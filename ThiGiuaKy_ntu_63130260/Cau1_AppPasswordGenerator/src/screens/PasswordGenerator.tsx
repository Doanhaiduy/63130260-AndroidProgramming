import { ActivityIndicator, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Slider from '@react-native-community/slider';

type Props = {};

const PasswordGenerator = (props: Props) => {
    return (
        <SafeAreaView className='flex-1 bg-[#0a0e31] w-full items-center justify-center '>
            <StatusBar style='light' />
            <Text className='text-[26px] font-bold text-white '>Password Generator</Text>
            <View className='mt-12 bg-[#1d2141] w-[90%] p-6 text-center rounded-xl'>
                <Text className='text-center text-white text-[20px]'>"password"</Text>
            </View>
            <View className='mt-4 w-full items-center'>
                <Text className='uppercase text-[#999] font-medium self-start ml-[7%]'>
                    length: <Text className='text-white'>12</Text>
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
                        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                    />
                </View>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Lowercase</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                    />
                </View>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Numbers</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                    />
                </View>
                <View className='mt-2 bg-[#1d2141] w-[90%] p-4 px-6 text-center rounded-xl flex-row items-center justify-between'>
                    <Text className='text-white text-base'>Include Symbols</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor='#3e3e3e'
                    />
                </View>
            </View>
            <TouchableOpacity className='w-[90%] items-center justify-center rounded-xl bg-[#6778e2] py-4 mt-8'>
                <Text className='text-white font-semibold text-[18px] uppercase'>Generate Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PasswordGenerator;

const styles = StyleSheet.create({});
