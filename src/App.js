import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainComponent />
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
