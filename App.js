import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducer/reducer';
import Navigation from './src/components/navigation'
import thunk from "redux-thunk";


const store = createStore(reducers,  applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
        <Navigation />
    </Provider>
  );
};


export default App;
