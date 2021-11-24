import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { App } from './App';
import './index.css';
import './app.css';
import store from './app/store'
import { Provider } from 'react-redux';
render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
