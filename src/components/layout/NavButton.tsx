import Link from 'next/link'
import { ReactElement } from 'react'

interface NavButtonProps {
    children?: ReactElement,
    href: string
}

export default function NavButton({ children, href }: NavButtonProps) {
    return (
        <Link href={href} className='h-full grow flex justify-center items-center active:bg-black active:bg-opacity-10 transition-all'>{children}</Link>
    )
}