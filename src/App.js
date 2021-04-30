import React from 'react';
import Todo from './components/Todo';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
        return (
            <div className='wrapper'>
                <Header />
                <div className="App">
                    <Todo />
                </div>
                <Footer />
            </div>
        );
    }
export default App;