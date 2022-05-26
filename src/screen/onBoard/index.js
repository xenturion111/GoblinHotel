import React from 'react';
import {ImageBackground, StyleSheet, View, Text, StatusBar} from 'react-native';
import COLORS from '../../components/colors';
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native-paper';

const OnBoard = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1}}>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)"/>
            <ImageBackground 
                style={{ flex: 1,}}
                source={require('../../../assets/img/background.jpg')}>
                <View style={style.details}>
                    <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold',}}>
                        Goblin House 
                    </Text>
                    <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15,}}>
                        Lets Travell and book the hotel.
                    </Text>
                </View>
                    <Button 
                        style={style.btn} 
                        mode="Outlined " 
                        color="#f08e25"
                        contentStyle={{ height: 44 }}
                        onPress={() => {
                            navigation.navigate('HomeScreen');
                        }}>
                            Get Started
                    </Button>
             </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    details: {
        height: '30%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    btn: {
        height: '18%',
        bottom: 0,
        position: 'absolute',
        left: 30,
    }
})
export default OnBoard;