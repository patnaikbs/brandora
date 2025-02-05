import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyStack from './src/StackNavigation';
AppRegistry.registerComponent(appName, () => MyStack);
