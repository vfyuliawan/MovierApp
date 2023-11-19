import React from 'react';
import { View,Text, TouchableWithoutFeedback, ScrollView, Image, Dimensions  } from 'react-native'
import { style } from '../theme';
import {useNavigation} from '@react-navigation/native'

var{width, height} = Dimensions.get('window');





const MovieList = ({title, data, hideSeeAll}) => {


    const navigation = useNavigation()
    let movieName = "Terminator Silverston Stalon" 
    return ( 
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl"> {title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableWithoutFeedback>
                            <Text style={style.text} className="text-lg">See All</Text>
                        </TouchableWithoutFeedback>
                    )
                }
                
            </View>
            {/* Movie Row */}
            <ScrollView
            horizontal
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ paddingHorizontal:15 }}
            >
            <View>
            <Text>data</Text>

            </View>
                {
                    data.map((item, index) => {
                        return(
                            <TouchableWithoutFeedback 
                            key={index}
                            onPress={() => {navigation.push('Movie', item)}}
                            >
                            <View>
                                <View className="space-y-1 mr-4">
                                    <Image 
                                        source={require('../assets/movie_poster.png')}
                                        style={{ width: width*0.33, height:height*0.22 }}
                                    />
                                </View>
                                <Text className="text-base ml-1">
                                    {(movieName.length>14 ? movieName.slice(0,14) + '...' : movieName)}
                                </Text>
                            </View>
                            </TouchableWithoutFeedback>
                            
                        );
                    })
                }
            </ScrollView>
        </View>
     );
}
 
export default MovieList;