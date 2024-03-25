import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { SlideShow } from '../constants/index.js';
import Header from '../components/Header';

type Props = {};

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

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.RIGHT).onEnd(handleBack),
        Gesture.Fling().direction(Directions.LEFT).onEnd(handleContinue)
    );

    return (
        <SafeAreaView className=''>
            <View className='h-full'>
                <Text className='text-xl font-bold ml-4'>Portfolio</Text>
                <Header />

                <GestureDetector gesture={swipes}>
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
                                entering={SlideInRight.duration(300)}
                                exiting={SlideOutLeft.duration(300)}
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
                </GestureDetector>

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
