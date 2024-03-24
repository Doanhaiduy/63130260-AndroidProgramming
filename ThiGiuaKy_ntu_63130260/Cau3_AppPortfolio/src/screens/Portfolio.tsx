import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';
// import Animated from 'react-native-reanimated';

type Props = {};

const SlideShow = [
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
            <View className=' gap-2'>
                <View className='flex-row gap-2 p-2 items-center bg-[#eee] rounded-lg '>
                    <Text className='text-base font-semibold'>Nha Trang University</Text>
                </View>
                <View className='flex-row gap-2 p-2 items-center bg-[#eee] rounded-lg justify-between'>
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
                <View className='flex-row gap-2 p-2 items-center bg-[#eee] rounded-lg '>
                    <Text className='text-base font-semibold'>Phone: </Text>
                    <Text className='text-base'>+84 399998943</Text>
                </View>
                <View className='flex-row gap-2 p-2 items-center bg-[#eee] rounded-lg '>
                    <Text className='text-base font-semibold'>Email: </Text>
                    <Text className='text-base'>haiduytbt2k3@gmail.com</Text>
                </View>
            </View>
        ),
        icon: <MaterialIcons name='quick-contacts-dialer' size={200} color='#263775' />,
    },
];

const Portfolio = (props: Props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const data = SlideShow[slideIndex];

    const handleContinue = () => {
        const isLastScreen = slideIndex === SlideShow.length - 1;
        if (isLastScreen) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    };

    const handleBack = () => {
        const isFirstScreen = slideIndex === 0;
        if (isFirstScreen) {
            setSlideIndex(SlideShow.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    };

    return (
        <SafeAreaView className=''>
            <View className='h-full'>
                <Text className='text-xl font-bold ml-4'>Portfolio</Text>
                <View className='items-center mt-4'>
                    <Image
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/Avatar%2F%C4%90o%C3%A0n%20H%E1%BA%A3i%20Duy%2Favt.jpga078daaf-c293-4a9b-959a-44e3dae3818d?alt=media&token=e14db328-3a75-4bd9-94e4-f296fbaad096',
                        }}
                        resizeMode='cover'
                        width={150}
                        height={150}
                        borderRadius={10000}
                    />
                    <Text className='text-3xl font-semibold mt-4 mb-1 '>Doan Hai Duy</Text>
                    <Text className='text-sm text-[#8a8a8a] font-medium'>63130260 - FE Developer</Text>
                </View>

                <View className='px-4 mt-5 ' key={slideIndex}>
                    <View className='flex-row gap-2 '>
                        {SlideShow.map((step_, index) => {
                            const isActive = index === slideIndex;
                            return (
                                <View
                                    key={index}
                                    className={`flex-1 h-[3px] bg-gray-300 ${
                                        isActive ? 'bg-[#263775]' : 'bg-[#eee]'
                                    } rounded-full' `}
                                />
                            );
                        })}
                    </View>
                    <View>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            className='text-3xl font-semibold my-4 uppercase'
                        >
                            {data.title}
                        </Animated.Text>
                        <Animated.View entering={SlideInRight.delay(150)} exiting={SlideOutLeft}>
                            {data.content}
                        </Animated.View>
                    </View>
                    <Animated.View
                        entering={FadeIn.duration(700)}
                        exiting={FadeOut.duration(700)}
                        className='mx-auto mt-10'
                    >
                        {data.icon}
                    </Animated.View>
                </View>

                <View className='px-4 mt-auto flex-row'>
                    <TouchableOpacity
                        className='px-6 py-4 flex-row mr-3 bg-[#eee] rounded-full items-center justify-center'
                        onPress={handleBack}
                    >
                        <AntDesign name='caretleft' size={22} color='#263775' />
                        <Animated.Text
                            entering={FadeIn}
                            exiting={FadeOut}
                            className='text-[18px] text-[#263775] font-semibold ml-2'
                        >
                            {slideIndex === 0 ? SlideShow[SlideShow.length - 1].title : SlideShow[slideIndex - 1].title}
                        </Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='items-center justify-center flex-1 py-4 flex-row bg-[#263775] rounded-full '
                        onPress={handleContinue}
                    >
                        <Animated.Text
                            entering={FadeIn}
                            exiting={FadeOut}
                            className='text-[18px] font-semibold mr-2 text-white'
                        >
                            {slideIndex === SlideShow.length - 1 ? SlideShow[0].title : SlideShow[slideIndex + 1].title}
                        </Animated.Text>
                        <AntDesign name='caretright' size={22} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Portfolio;

const styles = StyleSheet.create({});
