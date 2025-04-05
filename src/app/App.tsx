import './App.css';

import RootLayout from '~/layouts/RootLayout';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <RootLayout />
        </>
    );
}

export default App;
