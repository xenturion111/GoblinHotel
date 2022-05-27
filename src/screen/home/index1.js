import React, {useEffect} from 'react';
import 
{   SafeAreaView, 
    StatusBar, 
    View, 
    StyleSheet, 
    Text, 
    ScrollView, 
    TextInput, 
    FlatList, 
    Dimensions, 
    TouchableOpacity, 
    Image} 
    from 'react-native';
import COLORS from '../../components/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getHotels} from '../../../store/action/action'
import { useSelector, useDispatch  } from 'react-redux';
import hotels from '../../components/hotels'

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;
const HomeScreen = () => {
    const navigation = useNavigation();
    // const {hotels} = useSelector((state) => state);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getHotels());
    // }, [])
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const categories = [
        'All',
        'Popular',
        'Top Rated',
        'Luxury'
      ];
      const CategoryList = ({navigation}) => {
        return (
          <View style={style.categoryListContainer}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex(index)}>
                <View>
                  <Text
                    style={{
                      ...style.categoryListText,
                      color:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.grey,
                    }}>
                    {item}
                  </Text>
                  {selectedCategoryIndex == index && (
                    <View
                      style={{
                        height: 3,
                        width: 30,
                        backgroundColor: '#04555c',
                        marginTop: 2,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      };
    const Card = (hotel, index) => {
        return (
            <View style={{...style.card}}>
                 <Image source={hotel.image} style={style.cardImage} />
            </View>
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
                     <CategoryList />
                     <Text style={style.sectionTitle}>
                        Hotels
                     </Text>
                     <View>
                        <FlatList
                            horizontal
                            data={hotels}
                           contentContainerStyle={{paddingVercital: 30, paddingLeft: 20}}
                           showsHorizontalScrollIndicator={true}
                           renderItem={(item, index) => <Card hotel={item} index={index} />}
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
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30,
      },
      categoryListText: {
        fontSize: 17,
        fontWeight: 'bold',
      },
      card: {
        height: 280,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: 'white',
      },
      cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
})
export default HomeScreen;