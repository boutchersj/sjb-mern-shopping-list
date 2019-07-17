import React from 'react';
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
