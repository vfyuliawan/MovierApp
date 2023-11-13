import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import {style} from '../theme'
import {TrandingMovie} from '../components/TrandingMovie.jsx'
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';



const ios = Platform.OS == 'ios';
const HomeScreen = () => {
  const [tranding, setTranding] = useState([1,2,3,4,5]);
  const [upcomming, setUpcomming] = useState([1,2,3,4,5]);
  const [topRated, setTopRated] = useState([1,2,3,4,5]);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mt-7">
          <StatusBar style='light'/>
          <View className="flex-row justify-between items-center mx-4">
             <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white"/>
             <Text className="text-white text-3xl font-bold"><Text style={style.text}>M</Text>ovierr</Text>
             <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                <MagnifyingGlassIcon size={30} color="white" strokeWidth={2}/>
             </TouchableOpacity>
          </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom:10 }}>
          {/* Tranding Movie */}
          <TrandingMovie data={tranding}/>

          {/* Upcomming Movie */}
          <MovieList title="Upcoming" data={upcomming}/>

          {/* Top Rated Movie */}
          <MovieList title="Top Rated" data={topRated}/>
        </ScrollView>
    </View>
  );
};

export default HomeScreen;
