import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Test2 from './test2';
import Layout from './pages/layout/layout';

function Main(){
   
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='test2' element={<Test2/>}/> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;