import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';

type Props = {
    setVisible: any;
    visible: boolean;
    todoName: string;
    handleAddTodo: any;
    setTodoName: any;
};

const Footer = ({ setVisible, visible, todoName, handleAddTodo, setTodoName }: Props) => {
    return (
        <View className='mt-10'>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                className='w-[85%] mx-auto bg-[#032f54] rounded-full items-center flex-row p-2 justify-between '
            >
                <AntDesign name='pluscircleo' size={24} color='transparent' className='' />
                <Text className='text-white text-lg font-semibold '>Add New Task</Text>
                <AntDesign name='pluscircle' size={40} color='white' />
            </TouchableOpacity>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Add New Task</Dialog.Title>
                    <Dialog.Description>Enter the name of the task you want to add to the list.</Dialog.Description>
                    <Dialog.Input autoFocus value={todoName} onChangeText={setTodoName} label='' />
                    <Dialog.Button label='Cancel' onPress={() => setVisible(false)} />
                    <Dialog.Button label='Add' onPress={() => handleAddTodo(todoName)} />
                </Dialog.Container>
            </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({});
