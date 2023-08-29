import React, { FC } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return <div className='grid place-items-center h-screen bg-white'>
        <div className='w-[30rem] h-[40rem] bg-gray-100 rounded-lg'>
            {children}
        </div>
    </div>
}
export default Layout