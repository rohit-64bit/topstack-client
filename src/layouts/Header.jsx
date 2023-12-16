import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextLink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const menuItems = [
        "Home",
        "About Us",
        "Services",
        "Careers",
        "Contact Us"
    ];

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {

            const currentPosition = window.scrollY;

            if (currentPosition > scrollPosition) {
                // Set 'scrolling' to true when the user has scrolled down a certain amount (e.g., 100 pixels)
                setScrolling(true);
            } else {
                // Set 'scrolling' to false when the user scrolls back up
                setScrolling(false);
            }
        };

        // Add a scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            {/* header for smaller devices */}

            <Navbar onMenuOpenChange={setIsMenuOpen} className='block lg:hidden'>

                <NavbarContent className='flex items-center'>
                    
                    <NavbarBrand>
                        <img src={Logo} alt="" className=' flex w-28 h-auto' />
                    </NavbarBrand>

                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="mx-auto"
                    />

                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <NextLink
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

            {/* header for desktop */}

            <header className={!scrolling ? 'bg-white backdrop-blur-md bg-opacity-50 top-0 hidden lg:flex w-full justify-between items-center py-6 fixed sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-1000 -translate-y-0' : 'bg-white backdrop-blur-md bg-opacity-50 top-0 hidden lg:flex w-full justify-between items-center py-6 fixed sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-1000 -translate-y-40'}>

                <Link to='/'>
                    <img src={Logo} alt="" className='w-40 h-auto' />
                </Link>

                <nav className='flex gap-3'>

                    <a href='#home'>Home</a>
                    <a href='#about'>About Us</a>
                    <a href='#services'>Services</a>
                    <a href='#carrers'>Careers</a>
                    <a href='#contact'>Contact Us</a>

                </nav>

                <a href='/' className='w-max bg-sky-200 h-max text-blue-600 px-10 py-2 rounded-full'>Courses</a>

            </header>

        </>
    )
}
export default Header;

