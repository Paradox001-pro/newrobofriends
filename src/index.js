import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './components/Cardlist';
import App from './container/App'
// import Footer from './Components/SearchBox/footer'
// import Cardist from './CardList';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <div className='maincard'>
        <App />
        {/* <Footer /> */}
    </div>,
    document.getElementById('root')
 );

serviceWorker.register();


//url for the project
//https://robofriends-ssr.jothamardel.vercel.app/