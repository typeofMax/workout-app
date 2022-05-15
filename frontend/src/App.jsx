//@Libs
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//@Components
import Home from './components/pages/Home/Home';
import NewWorkout from './components/pages/NewWorkout/NewWorkout';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='new-workout' element={<NewWorkout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
