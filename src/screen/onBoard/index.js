import React from 'react';
import {ImageBackground, StyleSheet, View, Text, StatusBar} from 'react-native';
import COLORS from '../../components/colors';

const OnBoard = (navigation) => {
    return (
        <View style={{ flex: 1}}>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)"/>
            <ImageBackground 
                style={{ flex: 1,}}
                source={require('../../../assets/img/background.jpg')}>
                <View style={style.details}>
                    <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold',}}>
                        Discover 
                    </Text>
                    <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15,}}>
                        Lets Travell and book the hotel.
                    </Text>
                </View>

                <View style={style.btn}>
                    <Text style={{fontWeight: 'bold'}}>
                        Get Started
                    </Text>
                </View>

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
        height: '50',
        width: '120',
        backgroundColor: COLORS.white,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default OnBoard;