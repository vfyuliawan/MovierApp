import { Image, ScrollView, Text, View } from 'react-native'
import React ,{useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import {useRoute} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { style, theme } from '../theme';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';


const {width, height} = Dimensions.get('window')
const ios = Platform.OS == 'ios';

const MovieScreen = () => {
    let movieName = "Terminator Silverston Stalon" 
    const navigation = useNavigation()


    // put route parameter
    const {params: item} = useRoute()
    
    // isFavorite
    const [isFavorit, setIsFavorit] = useState(false);

    // Top Cast
    const [cast, setCast] = useState([1,2,3,4,5]);

    // Similiar Movies
    const [smiliarMovies, setSmiliarMovies] = useState([1,2,3,4,5]);
    
    
    useEffect(() => {
        // Call Movie Api
    }, [item]);

    return (
        <ScrollView 
        contentContainerStyle={{ paddingBottom:20 }}
        className="flex-1 bg-neutral-900"
        >
            {/* Back Button and Movie Poster */}
            <View className="w-full">
            
              <SafeAreaView
                style={{
                  position: 'absolute',
                  zIndex:2,
                  width: width,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  paddingTop: 5,
                }}>
                <TouchableOpacity
                  style={[style.background, {borderRadius: 10}]}
                  onPress={() => navigation.goBack()}>
                  <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIsFavorit(!isFavorit);
                  }}>
                  <HeartIcon
                    size="35"
                    strokeWidth={2.5}
                    color={isFavorit ? theme.background : 'white'}
                  />
                </TouchableOpacity>
              </SafeAreaView>
                <View style={{ zIndex:1 }}>
                    <Image 
                        source={require('../assets/movie_poster.png')}
                        style={{ width:width, height:height*0.5 }}
                    />
                    <LinearGradient className="absolute bottom-0" colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={{ width, height:height*0.4 }}/>
                </View>
            </View>

            {/* Movie Detail */}
            <View className="space-y-3" style={{ marginTop:-(height*0.08) }} >
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>
            </View>

            {/* Status */}
            <Text className="text-slate-600 font-semibold text-center mt-3">Released : 2020 . 170 min</Text>
            <View style={{ flexDirection:'row', justifyContent:'center' }}>
                <Text className="text-slate-600 font-semibold text-center mt-3">Action . </Text>
                <Text className="text-slate-600 font-semibold text-center mt-3">Thrill .</Text>
                <Text className="text-slate-600 font-semibold text-center mt-3">Commedy </Text>
            </View>
            <View style={{ marginHorizontal:30 }}>
                <Text className="text-slate-600 font-semibold text-center mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus numquam facere soluta, minima dolor quam? Necessitatibus repellendus dicta dolore aperiam, perferendis doloremque natus odit dignissimos illum corporis nulla neque excepturi. </Text>
                <Text className="font-bold text-slate-800 mt-12 text-3xl">Top Cast</Text>
            </View>
            <Cast navigation={navigation} cast={cast}/>
            
            
            {/* Similiar Moviees */}
            <View style={{ marginTop:40 }}>

            </View>
            <MovieList title={"Similiar Movie"} data={smiliarMovies} hideSeeAll={true} />
        </ScrollView> 
     );
}
 
export default MovieScreen;