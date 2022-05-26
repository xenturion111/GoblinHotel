import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet, Text, ScrollView, TextInput, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import COLORS from '../../components/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getHotels} from '../../../store/action/action'
import { useSelector, useDispatch  } from 'react-redux';

const {width} = Dimensions.get('screen')
const HomeScreen = () => {
    const navigation = useNavigation();
    const {hotels} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotels());
    }, [])

    const categoryList = [
        'All',
        'Popular',
        'Top Rated',
        'Luxury'
      ];
    const ListCategory = () => {
        return (
            <View style={style.categoryContainer}>
                {categoryList.map((item, index) => (
                    <TouchableOpacity key={index} >
                        <View>
                            <Text style={{...style.categoryListText}}>
                                {item}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    const Card = () => {
        return (
            <ImageBackground style={style.cardImage} source={hotels.hotelImages}></ImageBackground>
        )
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar translucent={false} backgroundColor={'#04555c'} />
                <View style={style.header}>
                    <Icon name="sort" size={28} color={{color: 'white'}} /> 
                    <Icon name="notifications-none" size={28} color={COLORS.white} /> 
                </View>
                <ScrollView showVercitalScrollIndicator={false}>
                     <View style={{backgroundColor: '#04555c', height: 120, paddingHorizontal: 20,}}>
                        <View style={{flex: 1}}>
                            <Text style={style.headerTitle}>Find Hotel</Text>
                            <Text style={style.headerTitle}>And Happy holiday</Text>
                            <View style={style.inputContainer}>
                                <Icon name='search' size={28} />
                                <TextInput placeholder="Search Place" style={{color: '#808080'}} />                        
                                </View>
                        </View>
                     </View>
                     <ListCategory />
                     <Text style={style.sectionTitle}>
                        Hotels
                     </Text>
                     <View>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={hotels} 
                            renderItem={({item}) => <Card  hotels={item} />}    
                        />
                     </View>
                </ScrollView>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#04555c',
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    },
    inputContainer: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 12,

    },
    categoryContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.secondary,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 220,
        width: width / 2
    },
    categoryListText: {

    }
})
export default HomeScreen;