import React, { ReactNode } from 'react'
import SideProfile from '@/components/dashboard/sideProfile';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-row gap-7 justify-between'>
            <div className="profile w-4/5 border-r-2 border-spacing-x-0.5  ">
                <SideProfile />
            </div>

            <div className="right w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout