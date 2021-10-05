import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Movies from '../screens/Movies';
import MovieDetails from '../screens/MovieDetails';
import {colors} from '../constants';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Movies'}
          component={Movies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'MovieDetails'}
          component={MovieDetails}
          options={() => ({
            title: '',
            headerTintColor: colors.black,
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
