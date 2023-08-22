import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// SCREEN
import JalaMedia from '../Screen/JalaMedia';
import ShrimpPriceDetail from '../Screen/ShrimpPriceDetail';
import ShrimpNewsDetail from '../Screen/ShrimpNewsDetail';
import ShrimpDiseaseDetail from '../Screen/ShrimpDiseaseDetail';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={JalaMedia}>
        <Stack.Screen
          options={{headerShown: false}}
          name="JalaMedia"
          component={JalaMedia}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ShrimpPriceDetail"
          component={ShrimpPriceDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ShrimpNewsDetail"
          component={ShrimpNewsDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ShrimpDiseaseDetail"
          component={ShrimpDiseaseDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
