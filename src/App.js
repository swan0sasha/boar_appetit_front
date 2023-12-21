import {Routes, Route, Link} from 'react-router-dom'
import {RecipePage} from './pages/RecipePage'
import {MainPage} from './pages/MainPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/recipes/*"} element={<RecipePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
