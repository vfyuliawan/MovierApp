import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../moduls/HomeScreen/HomeScreen';
import MovieScreen from '../moduls/MovieScreen';
import PersonScreen from '../moduls/PersonScreen';
import SearchScreen from '../moduls/SearchScreen';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Person"
        component={PersonScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
