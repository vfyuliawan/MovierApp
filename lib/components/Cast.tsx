import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface Card {
  personName: string;
  characterName: string;
}

export default function Cast({cast, navigation, title}: any) {
  const card = {
    personName: 'Jhon Wijk',
    characterName: 'Keanu Reves',
  } as Card;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 30}}>
      {cast &&
        cast.map((item: Card, index: any) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push('Person', item)}
              style={{marginRight: 4, alignItems: 'center', marginTop: 20}}>
              <View
                style={{
                  // marginRight: 20,
                  borderRadius: 35,
                  // backgroundColor: 'red',
                  // borderCurve: 'circular',
                  alignItems: 'center',
                  overflow: 'hidden',
                  flexWrap: 'wrap',
                  width: 70,
                  height: 70,
                }}>
                <Image
                  source={require('../assets/keanu.jpg')}
                  // resizeMode="cover"
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </View>
              <Text style={{color: 'white', marginTop: 10}}>
                {card.personName.length > 10
                  ? card.personName.slice(0, 8) + '...'
                  : card.personName}
              </Text>
              <Text style={{color: 'white'}}>
                {card.characterName.length > 10
                  ? card.characterName.slice(0, 8) + '...'
                  : card.characterName}
              </Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
}
