import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayout from '~/layouts/RootLayout';
import HomePage from '~/pages/HomePage';
import MostPopularPage from '~/pages/MostPopularPage';
import VegPage from '~/pages/VegPage';
import { useGetPostsQuery } from '~/query/services/posts.ts';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },
            { path: 'vegkitchen', Component: VegPage },
            { path: 'mostpopularfood', Component: MostPopularPage },
        ],
    },
]);

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
