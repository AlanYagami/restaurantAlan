import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../../modules/profile/adapters/screens/Profile'
import ImageRender from '../../modules/profile/adapters/components/ImageRender'

const Stack = createStackNavigator()

export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile'
                }}
            />
            <Stack.Screen
                name= "ImageRender"
                component={ImageRender}
                options={{
                    title: 'Image'
                }}
            />
        </Stack.Navigator>
    )
}