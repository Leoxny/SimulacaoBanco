import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Register from '../../pages/Home/Register';
import Home from '../../pages/Home';

export default function Routes() {

    const Drawer = createDrawerNavigator();

 return (
    <Drawer.Navigator
        screenOptions={
            {
                headerShown: false
            }
        }
        color="danger"
    >
        <Drawer.Screen
            name="Home"
            component={Home}
        />
        <Drawer.Screen 
            name="Register"     
            component={Register}
        />
    </Drawer.Navigator>

  );
}