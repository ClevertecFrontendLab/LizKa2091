import './App.css';

import HomePage from '~/pages/HomePage';
import { useGetPostsQuery } from '~/query/services/posts.ts';
function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
    return (
        <>
            <HomePage />
        </>
    );
}
export default App;
