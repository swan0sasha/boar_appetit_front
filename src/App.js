import Top from "./components/Top";
import {Routes, Route, Link} from 'react-router-dom'
import {RecipePage} from './pages/RecipePage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Top/>}/>
                <Route path={"/recipes/*"} element={<RecipePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
