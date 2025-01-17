import React from 'react';
import { Image, TouchableOpacity, Button,View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import GalleryScreen from '../gallery/GalleryViewContainer';

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import ProfileScreen from '../profile/ProfileViewContainer';
import ArticleScreen from '../article/ArticleViewContainer';
import ServiceDetailScreen from '../services/ServiceDetailViewContainer';
import ChatScreen from '../chat/ChatViewContainer';
import MessagesScreen from '../chat/MessagesViewContainer';
import ChartsScreen from '../charts/ChartsViewContainer';
import AuthScreen from '../auth/AuthViewContainer';
import StaffScreen from '../staff/StaffViewContainer';
import CustomerScreen from '../customer/CustomerViewContainer';
import CustomerAddScreen from '../customer/CustomerAdd';
import ServiceTypeScreen from '../serviceType/ServiceTypeViewContainer';
import ServicesScreen from '../services/ServicesViewContainer';
import MachineTypeScreen from '../machineType/MachineTypeViewContainer';

import { colors, fonts } from '../../styles';

const headerBackground = require('../../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: 'Guru Amar Industries',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{ flex: 1 }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
      },
    },
    Article: {
      screen: ArticleScreen,
      navigationOptions: {
        title: 'Article',
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        title: 'Customers',
      },
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'Messages',
      },
    },
    Charts: {
      screen: ChartsScreen,
      navigationOptions: {
        title: 'Charts',
      },
    },
    Auth: {
      screen: AuthScreen,
      navigationOptions: {
        header: null,
      },
    },
    CustomerAdd: {
      screen: CustomerAddScreen,
      navigationOptions: {
      title: 'Customer Information',
      },
    },
    Customer: {
      screen: CustomerScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Customers',
        headerRight: (
          <View style={{ flexDirection: 'row' }}>
             <TouchableOpacity
               onPress={() => navigation.navigate('CustomerAdd')}
               style={{
                 paddingRight: 10,
               }}
             >
               <Image
                 source={require('../../../assets/images/icons/plus.png')}
                 resizeMode="contain"
                 style={{
                   width: 30,
                   height: 20,
                 }}
               />
             </TouchableOpacity>
           </View>
        ),
        headerBackground: (
          <Image
            style={{ flex: 1 }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
     
    },
    Staff: {
      screen: StaffScreen,
      navigationOptions: {
        title: 'Staff',
      },
    },
    ServiceDetail: {
      screen: ServiceDetailScreen,
      navigationOptions: {
        title: 'Service Detail',
      },
    },    
    Services: {
      screen: ServicesScreen,
      navigationOptions: {
        title: 'Services',
      },
    },
    ServiceType: {
      screen: ServiceTypeScreen,
      navigationOptions: {
        title: 'Service Type',
      },
    },
    MachineType: {
      screen: MachineTypeScreen,
      navigationOptions: {
        title: 'Machine Type',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);



export default createAppContainer(stackNavigator);
