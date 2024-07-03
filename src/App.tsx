import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative flex items-center justify-center w-full max-w-screen-2xl min-h-screen p-5 m-auto'>
            <Outlet />
        </main>
    );
};
