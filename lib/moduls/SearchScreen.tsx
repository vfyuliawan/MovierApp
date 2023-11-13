import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

interface MovieSearch {
  title?: string;
  subtitle?: string;
  image?: string;
  rate?: string;
}
const movie1: MovieSearch = {
  title: 'jhonsonjhk',
  subtitle: 'loremipsum',
  image:
    'https://cdns.klimg.com/merdeka.com/i/w/news/2021/07/28/1334393/content_images/670x335/20210728080401-1-film-action-001-jevi-nugraha.jpg',
  rate: '12',
};

const movie2: MovieSearch = {
  title: 'jhonson2',
  subtitle: 'loremipsum',
  image:
    'https://cdn1-production-assets-kly.akamaized.net/medias/1335782/big-portrait/d71764546efa9ce3f5ff3150737d8e84-087712700_1472832328-Headshot.jpg',
  rate: '12',
};

export default function SearchScreen() {
  const list: MovieSearch[] = [movie1, movie2];
  const navigation: any = useNavigation();
  const [listSearch, setlistSearch] = useState<MovieSearch[]>([]);
  const [listFilter, setlistFilter] = useState<MovieSearch[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);

  const filter = list.filter((key, val) => {
    return key.title == 'jhonson2';
  });

  useEffect(() => {
    setlistSearch(list);
    setlistFilter(filter);
  }, []);

  console.log('====================================');
  console.log(list);
  console.log('====================================');

  return (
    <SafeAreaView style={{backgroundColor: '#222221', flex: 1}}>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: 'gray',
          borderWidth: 2,
          paddingLeft: 20,
          borderRadius: 21,
        }}>
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
        />
        <TouchableOpacity
          style={{backgroundColor: 'gray', padding: 12, borderRadius: 19}}
          onPress={() => navigation.navigate('Home')}>
          <XMarkIcon size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Result */}
      <Text>Total Result ={listSearch.length}</Text>

      {listSearch.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 5}}>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {listSearch.map((item: MovieSearch, index) => {
              return (
                <TouchableWithoutFeedback key={index}>
                  <View
                    style={{
                      padding: 5,
                      marginBottom: 5,
                    }}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{
                        width: width * 0.44,
                        height: height * 0.3,
                        borderRadius: 20,
                      }}
                    />
                    <Text>{item.title}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/movieFam.png')}
            style={{height: 90}}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
