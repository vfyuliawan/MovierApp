import {Text, View, TouchableWithoutFeedback, Dimensions, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Carousel} from 'react-native-snap-carousel-v4';
import {useNavigation} from '@react-navigation/native'


var{width, height} = Dimensions.get('window');


export const TrandingMovie = ({data}) => {
  const navigation = useNavigation()
  const handleOnClick = (item) =>{
    navigation.navigate('Movie', item)

  }

  return (
    <View className="mb-8">
       <Text className="text-white text-xl mx-4 mb-5">Trendiing</Text>
        <Carousel 
        data={data}
        renderItem={({item}) => <MovieCard item={item} handleOnClick={handleOnClick}/>}
        firstItem={1}
        inactiveSlideOpacity={0.06}
        sliderWidth={width}
        itemWidth={width*0.62} 
        slideStyle={{ display:'flex',alignItems:'center' }}
        ></Carousel>
    </View>
  );
};



const MovieCard = ({item, handleOnClick}) => {
  return ( 
    <TouchableWithoutFeedback onPress={() => handleOnClick(item)}>
        <Image className="rounded-3xl" source={require('../assets/movie_poster.png')} style={{width :width * 0.6, height:height*0.4}}/>
        {/* <Text className="text-white">Movies</Text> */}
    </TouchableWithoutFeedback> 
  );
}