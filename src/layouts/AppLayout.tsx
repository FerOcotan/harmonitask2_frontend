import { Link, Outlet } from 'react-router-dom'


import Logo from '../components/logo'

export default function AppLayout() {
    return (
        <>
            <header className='bg-gray-800 py-5'>
                <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-32 md:w-48 lg:w-64'>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>
                </div>
            </header>

            <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
                <Outlet />
            </section>

            <footer className='py-5'>
                <p className='text-center'>
                    Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </footer>

          
        </>
    );
}
