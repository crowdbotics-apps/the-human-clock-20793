import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps114298Navigator from '../features/Maps114298/navigator';
import Add-Item114297Navigator from '../features/Add-Item114297/navigator';
import Maps114293Navigator from '../features/Maps114293/navigator';
import UserProfile114289Navigator from '../features/UserProfile114289/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps114298: { screen: Maps114298Navigator },
Add-Item114297: { screen: Add-Item114297Navigator },
Maps114293: { screen: Maps114293Navigator },
UserProfile114289: { screen: UserProfile114289Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
