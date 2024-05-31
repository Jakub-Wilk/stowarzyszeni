import Navbar from './Navbar'
import { ReactElement } from 'react'

interface LayoutProps {
    children?: ReactElement
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main className='w-full h-screen'>{children}</main>
        </>
    )
}