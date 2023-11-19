import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {style} from '../../../theme';
import {useNavigation} from '@react-navigation/native';
import {NowPlayingMovieModelResult} from '../../../domain/model/Home/HomeGetNowPlaying';
import {baseUrl, baseUrlImage} from '../../../core/api';

var {width, height} = Dimensions.get('window');

interface NowPlayingInterface {
  title: string;
  data: NowPlayingMovieModelResult[];
  hideSeeAll: boolean;
  onLoading?: boolean;
  nextPage?: number;
}

const NowPlaying = (props: NowPlayingInterface) => {
  const navigation: any = useNavigation();
  let movieName = 'Terminator Silverston Stalon';
  return (
    <View style={{marginBottom: 8}}>
      <View
        style={{
          marginBottom: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 8,
        }}>
        <Text style={{color: 'white', fontSize: 18}}> {props.title}</Text>
        {!props.hideSeeAll && (
          <TouchableWithoutFeedback>
            <Text style={[style.text, {fontSize: 18}]}>See All</Text>
          </TouchableWithoutFeedback>
        )}
      </View>
      {/* Movie Row */}
      <ScrollView
        horizontal
        style={{alignContent: 'center'}}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {props?.data?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                navigation.push('Movie', item);
              }}>
              <View>
                <View style={{marginHorizontal: 8}}>
                  <Image
                    borderRadius={16}
                    source={{
                      uri: `${baseUrlImage() + '/original' + item.poster_path}`,
                    }}
                    style={{width: width * 0.33, height: height * 0.22}}
                  />
                </View>
                <Text style={{marginLeft: 2}}>
                  {item.original_title.length > 14
                    ? item.original_title.slice(0, 14) + '...'
                    : item.original_title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}

        {props.onLoading ? (
          <View
            style={{
              justifyContent: 'center',
              width: width * 0.33,
              height: height * 0.22,
            }}>
            <ActivityIndicator size="large" color="#fffff" />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default NowPlaying;
