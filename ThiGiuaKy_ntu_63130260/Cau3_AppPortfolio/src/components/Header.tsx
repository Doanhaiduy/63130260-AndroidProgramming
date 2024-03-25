import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
    return (
        <View className='items-center mt-4'>
            <Image
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/Avatar%2F%C4%90o%C3%A0n%20H%E1%BA%A3i%20Duy%2Favt.jpga078daaf-c293-4a9b-959a-44e3dae3818d?alt=media&token=e14db328-3a75-4bd9-94e4-f296fbaad096',
                }}
                className='border-[4px] bg-[#263775]'
                style={{
                    borderColor: '#263775',
                }}
                resizeMode='cover'
                width={150}
                height={150}
                borderRadius={10000}
            />
            <Text className='text-3xl font-semibold mt-4 mb-1 '>Doan Hai Duy</Text>
            <Text className='text-sm text-[#8a8a8a] font-medium'>63130260 - FE Developer</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
