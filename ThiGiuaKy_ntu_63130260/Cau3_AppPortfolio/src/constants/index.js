import { Linking, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';

export const SlideShow = [
    {
        title: 'About me',
        content: (
            <Text className='text-base font-medium text-[#8a8a8a]'>
                I am a 3rd year student at Nha Trang University, currently studying software engineering, I want to
                become a software engineering engineer at a large company.
            </Text>
        ),
        icon: <FontAwesome name='user' size={200} color='#263775' />,
    },
    {
        title: 'Skill',
        content: (
            <View className='flex flex-row flex-wrap gap-y-2'>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>JavaScript</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>TypeScript</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>ReactJs</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>React Native</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>Node.js</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>Express.js</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>MongoDB</Text>
                <Text className='text-sm bg-[#f0f0f0] px-2 py-1 rounded-full mr-2'>Firebase</Text>
            </View>
        ),
        icon: <FontAwesome5 name='code' size={200} color='#263775' />,
    },
    {
        title: 'Education',
        content: (
            <View className='gap-2'>
                <View className='flex-row p-2 items-center bg-[#eee] rounded-lg '>
                    <Text className='text-base font-semibold'>Nha Trang University</Text>
                </View>
                <View className='flex-row  p-2 items-center bg-[#eee] rounded-lg justify-between'>
                    <Text className='text-base font-semibold'>Software Engineering</Text>
                    <Text className='text-base font-bold'>2021 - 2025</Text>
                </View>
            </View>
        ),
        icon: <FontAwesome6 name='book-open-reader' size={200} color='#263775' />,
    },

    {
        title: 'Contact',
        content: (
            <View className=' gap-2'>
                <TouchableOpacity
                    className='flex-row  p-2 items-center bg-[#eee] rounded-lg '
                    onPress={() => Linking.openURL(`tel:+84 399998943`)}
                >
                    <Text className='text-base font-semibold'>Phone: </Text>
                    <Text className='text-base'>+84 399998943</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='flex-row  p-2 items-center bg-[#eee] rounded-lg '
                    onPress={() => Linking.openURL(`mailto: haiduytbt2k3@gmail.com`)}
                >
                    <Text className='text-base font-semibold'>Email: </Text>
                    <Text className='text-base'>haiduytbt2k3@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='flex-row  p-2 items-center bg-[#eee] rounded-lg '
                    onPress={() => Linking.openURL(`https://www.doanhaiduy.website/`)}
                >
                    <Text className='text-base font-semibold'>Website: </Text>
                    <Text className='text-base underline'>https://www.doanhaiduy.website/</Text>
                </TouchableOpacity>
            </View>
        ),
        icon: <MaterialIcons name='quick-contacts-dialer' size={200} color='#263775' />,
    },
];
