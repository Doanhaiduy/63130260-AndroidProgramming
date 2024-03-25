import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

type Props = {
    onToggle: any;
    onDelete: any;
    item: any;
};

const Todo = ({ onToggle, onDelete, item }: Props) => {
    return (
        <View className='flex-row items-center my-5 '>
            <TouchableOpacity
                onPress={() => onToggle(item.id)}
                className='flex-row items-center gap-3 max-w-full w-[95%]'
            >
                <Entypo name='circle' size={24} color='black' />
                <Text className='text-base font-semibold text-[#032f54] mr-10' numberOfLines={2}>
                    {item.title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Entypo name='trash' size={24} color='black' />
            </TouchableOpacity>
        </View>
    );
};

export default Todo;

const styles = StyleSheet.create({});
