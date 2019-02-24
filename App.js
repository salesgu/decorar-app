import { createStackNavigator, createAppContainer } from 'react-navigation';
import ModelList from './screens/model-list';
import ModelView from './screens/model-view';

const MainNavigator = createStackNavigator({
	ModelList: { screen: ModelList },
	ModelView: { screen: ModelView }
});

const App = createAppContainer(MainNavigator);

export default App;
