import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayout from '~/layouts/RootLayout';
import { useGetPostsQuery } from '~/query/services/posts.ts';

const router = createBrowserRouter([{ path: '/', Component: RootLayout }]);

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
