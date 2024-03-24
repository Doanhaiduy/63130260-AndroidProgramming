import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../store/todoSlice';
import Dialog from 'react-native-dialog';

type Props = {};

const Todo = (props: Props) => {
    const { todos } = useSelector((state: any) => state.todo);
    const [visible, setVisible] = React.useState(false);
    const [todoName, setTodoName] = React.useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (name: string) => {
        if (name.trim() === '') {
            Alert.alert('Error', 'Please enter a valid task name');
        } else {
            dispatch(
                addTodo({
                    title: name,
                    completed: false,
                    id: Math.floor(Math.random() * 1000) + 1,
                })
            );
            setTodoName('');
            setVisible(false);
        }
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo(id));
    };

    return (
        <SafeAreaView className='flex-1 bg-white '>
            <Text className='text-3xl font-bold text-center text-[#032f54] mt-5'>Todo List</Text>
            <View className='bg-[#f8f8fa] w-[85%] mx-auto mt-4 p-5 py-8 rounded-xl min-h-[70vh]'>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => {
                        if (!item.completed) {
                            return (
                                <View className='flex-row items-center my-5 '>
                                    <TouchableOpacity
                                        onPress={() => handleToggleTodo(item.id)}
                                        className='flex-row items-center gap-3 max-w-full w-[95%]'
                                    >
                                        <Entypo name='circle' size={24} color='black' />
                                        <Text
                                            className='text-base font-semibold text-[#032f54] mr-10'
                                            numberOfLines={2}
                                        >
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                                        <Entypo name='trash' size={24} color='black' />
                                    </TouchableOpacity>
                                </View>
                            );
                        } else
                            return (
                                <View className='flex-row items-center  my-5'>
                                    <TouchableOpacity
                                        onPress={() => handleToggleTodo(item.id)}
                                        className='flex-row items-center gap-3 max-w-full  w-[95%]'
                                    >
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
                                    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                                        <Entypo name='trash' size={24} color='black' />
                                    </TouchableOpacity>
                                </View>
                            );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                className='w-[85%] mx-auto bg-[#032f54] rounded-full items-center flex-row p-2 justify-between mt-10'
            >
                <AntDesign name='pluscircleo' size={24} color='transparent' className='' />
                <Text className='text-white text-lg font-semibold '>Add New Task</Text>
                <AntDesign name='pluscircle' size={40} color='white' />
            </TouchableOpacity>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Add New Task</Dialog.Title>
                    <Dialog.Description>Enter the name of the task you want to add to the list.</Dialog.Description>
                    <Dialog.Input value={todoName} onChangeText={setTodoName} label='' />
                    <Dialog.Button label='Cancel' onPress={() => setVisible(false)} />
                    <Dialog.Button label='Add' onPress={() => handleAddTodo(todoName)} />
                </Dialog.Container>
            </View>
        </SafeAreaView>
    );
};

export default Todo;

const styles = StyleSheet.create({});
