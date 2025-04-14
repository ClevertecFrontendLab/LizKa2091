import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CategoryPage from '~/pages/CategoryPage';
import HomePage from '~/pages/HomePage';
import { useGetPostsQuery } from '~/query/services/posts.ts';
function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/category-vegan' element={<CategoryPage type='vegan' />} />
                <Route path='/category-juiciest' element={<CategoryPage type='juiciest' />} />
            </Routes>
        </Router>
    );
}
export default App;
