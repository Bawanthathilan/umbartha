import React, { ReactNode } from 'react'
import SideProfile from '@/components/dashboard/sideProfile';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-col md:flex-row gap-7 justify-between'>
            <div className="profile w-full md:w-4/5 border-r-0 md:border-r-2 border-b-2 md:border-b-0 pb-10 md:pb-0 border-spacing-x-0.5  ">
                <SideProfile />
            </div>

            <div className="right w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout