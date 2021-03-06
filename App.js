import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ColorScreen from './src/screens/ColorScreen';
import ColorGenerator from './src/screens/ColorsGenerator';
import ComponentsScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import ColorGeneratorWithReducer from './src/screens/ColorGeneratorWithReducer';
import CounterScreenWithReducer from './src/screens/CounterScreenWithReducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
const navigator = createStackNavigator(
  {
    ListScreen: ListScreen,
    Home : HomeScreen,
    ComponentScreen: ComponentsScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    ColorGenerator: ColorGenerator,
    ColorGeneratorWithReducer: ColorGeneratorWithReducer,
    CounterScreenWithReducer:CounterScreenWithReducer,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
