import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

type Props = {};

const Todo = (props: Props) => {
    const { todos } = useSelector((state: any) => state.todo);

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <Text className='text-3xl font-bold text-center text-[#032f54]'>Todo List</Text>
            <ScrollView className='bg-[#f8f8fa] w-[85%] mx-auto mt-4 p-5 py-8 rounded-xl min-h-[70vh]'>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => {
                        if (!item.completed) {
                            return (
                                <View className='flex-row items-center my-5 '>
                                    <TouchableOpacity className='flex-row items-center gap-3 max-w-full w-[95%]'>
                                        <Entypo name='circle' size={24} color='black' />
                                        <Text
                                            className='text-base font-semibold text-[#032f54] mr-10'
                                            numberOfLines={2}
                                        >
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                    <Entypo name='trash' size={24} color='black' />
                                </View>
                            );
                        } else
                            return (
                                <View className='flex-row items-center  my-5'>
                                    <TouchableOpacity className='flex-row items-center gap-3 max-w-full  w-[95%]'>
                                        <AntDesign name='checkcircle' size={24} color='black' />
                                        <Text
                                            className='text-base font-semibold line-through text-[#a9b7c4] flex-1'
                                            numberOfLines={2}
                                        >
                                            {item.title}
                                        </Text>
                                        <View className='px-2 py-1 bg-[#dcdcde] rounded-lg mr-2'>
                                            <Text className='text-[#777] font-medium'>completed</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Entypo name='trash' size={24} color='black' />
                                </View>
                            );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
            <TouchableOpacity className='w-[85%] mx-auto bg-[#032f54] rounded-full items-center flex-row p-2 justify-between mt-10'>
                <AntDesign name='pluscircleo' size={24} color='transparent' className='' />
                <Text className='text-white text-lg font-semibold '>Add New Task</Text>
                <AntDesign name='pluscircle' size={40} color='white' />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Todo;

const styles = StyleSheet.create({});
