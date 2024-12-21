import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
            <div className='bg-red-600'><h1>Nav Bar.</h1></div>
            </header>
           
            <section>
                <Outlet>

                </Outlet>
            </section>
            <footer>
                
            </footer>
        </div>
    );
};

export default MainLayout;