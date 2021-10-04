import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Movies from '../screens/Movies'
import MovieDetails from '../screens/MovieDetails'

const MainNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Movies'} component={Movies} options={{ headerShown: false }} />
                <Stack.Screen name={'MovieDetails'} component={MovieDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
