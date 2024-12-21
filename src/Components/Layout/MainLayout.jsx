import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar';

const MainLayout = () => {
    return (
        <div>
            <header>
            <NavBar></NavBar>
            </header>
           
            <section className='mt-[95px]'>
                <Outlet>

                </Outlet>
            </section>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;