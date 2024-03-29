import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../store/todoSlice';
import Footer from '../components/Footer';
import TodoItem from '../components/TodoItem';

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
        // check is todo has completed => delete
        const isCompleted = todos.find((todo: any) => todo.id === id)?.completed;
        if (isCompleted) {
            dispatch(deleteTodo(id));
        } else {
            Alert.alert('Error', 'You can only delete completed tasks');
        }
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
                            return <TodoItem onToggle={handleToggleTodo} onDelete={handleDeleteTodo} item={item} />;
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
            <Footer
                setVisible={setVisible}
                visible={visible}
                todoName={todoName}
                handleAddTodo={handleAddTodo}
                setTodoName={setTodoName}
            />
        </SafeAreaView>
    );
};

export default Todo;

const styles = StyleSheet.create({});
