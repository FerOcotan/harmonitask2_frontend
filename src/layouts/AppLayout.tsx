import { Link, Outlet, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from '@/components/logo'
import NavMenu from '@/components/NavMenu'
import { useAuth } from '@/hooks/useAuth'


export default function AppLayout() {

    const {data , isError, isLoading} = useAuth()

    if(isLoading) return <p className='text-center'>Cargando...</p>
    if(isError) {
        return <Navigate to={'/auth/login'} />
        }
    

    if (data)  return ( // <- Faltaba este return
        <>
            <header className='bg-black py-5'>
                <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-64'>
                        <Link to={'/auth/login'}>
                            <Logo />
                        </Link>
                    </div>

                    <NavMenu 
                     name={data.name}
                    />
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

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>
    )
}
