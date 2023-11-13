import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ChevronLeftIcon from 'react-native-heroicons/outline/ChevronLeftIcon';
import HeartIcon from 'react-native-heroicons/solid/HeartIcon';
import {style, theme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import MovieList from '../components/MovieList';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [personMovie, setPersonMovie] = useState([1, 2, 3, 4, 5]);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      style={{
        flex: 1,
        backgroundColor: '#232322',
      }}>
      {/* Back Button */}
      <View
        style={{
          height: 60,
          width: width,
        }}>
        <SafeAreaView
          style={{
            position: 'absolute',
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingTop: 35,
          }}>
          <TouchableOpacity
            style={[style.background, {borderRadius: 10}]}
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsFavorite(!isFavorite);
            }}>
            <HeartIcon
              size="35"
              strokeWidth={2.5}
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      {/*Person Detailed  */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            shadowColor: '#FFFFFF',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
          }}>
          <View
            style={{
              alignItems: 'center',
              overflow: 'hidden',
              height: height * 0.4,
              width: width * 0.78,
              borderRadius: (height * 0.4) / 2,
              borderColor: 'white',
              borderWidth: 3,
            }}>
            <Image
              source={require('../assets/keanu.jpg')}
              //   resizeMode="contain"
              style={{
                height: height * 0.5,
                width: width * 0.78,
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 6,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 32,
              fontWeight: 'bold',
            }}>
            Keanu Reeve
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '100',
            }}>
            London, United Kingdom
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 20,
            marginTop: 6,
            paddingVertical: 10,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'gray',
          }}>
          <View
            style={{
              borderRightWidth: 3,
              borderRightColor: '#D0CDCA',
              paddingVertical: 5,
              paddingHorizontal: 10,
              padding: 4,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Gender
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'normal',
              }}>
              Male
            </Text>
          </View>
          <View
            style={{
              borderRightWidth: 2,
              borderRightColor: '#D0CDCA',
              paddingVertical: 5,
              paddingHorizontal: 10,
              padding: 4,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Known For
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'normal',
              }}>
              Acting
            </Text>
          </View>
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: '#D0CDCA',
              paddingVertical: 5,
              paddingHorizontal: 10,
              padding: 4,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Birth Day
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'normal',
              }}>
              14,08, 1994
            </Text>
          </View>
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: '#D0CDCA',
              paddingVertical: 5,
              paddingHorizontal: 10,
              padding: 4,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Popularity
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'normal',
              }}>
              75,25
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            {' '}
            Biografi
          </Text>
          <Text style={{color: '#232322', alignItems: 'stretch'}}>
            Keanu Charles Reeves (/kiˈɑːnuː/ kee-AH-noo;[4][5][6] born September
            2, 1964) is a Canadian[b] actor. Born in Beirut and raised in
            Toronto, Reeves began acting in theatre productions and in
            television films before making his feature film debut in Youngblood
            (1986). He had his breakthrough role in the science fiction comedy
            Bill & Ted's Excellent Adventure (1989), and he reprised his role in
            its sequels. He gained praise for playing a hustler in the
            independent drama My Own Private Idaho (1991) and established
            himself as an action hero with leading roles in Point Break (1991)
            and Speed (1994).
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <MovieList title={'Moviess'} data={personMovie} hideSeeAll={false} />
        </View>
      </View>
    </ScrollView>
  );
}
