import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from "./store";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme'

const App: React.FC = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <div className="App">
          </div>
        </Provider>
      </MuiThemeProvider>
  )
}

export default App;