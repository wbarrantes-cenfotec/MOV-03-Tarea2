/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { SafeAreaView } from 'react-native';
 import { Provider } from 'react-redux';
 import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
 import * as reducers from './src/store/reducers';
 import thunk from 'redux-thunk';
import HomeScreen from './src/components/screens/homeScreen';

 const store = createStore(
   combineReducers(reducers),
   applyMiddleware(compose(thunk))
 );

 const App = () => {
   return (
     <Provider store={store}>
       <SafeAreaView>
         <HomeScreen />
       </SafeAreaView>
     </Provider>
   );
 };

 export default App;
