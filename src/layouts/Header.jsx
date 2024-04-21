import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextLink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    const { hash } = location;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const menuItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About Us",
            link: "#about",
        },
        {
            name: "Services",
            link: "#services",
        },
        {
            name: "Careers",
            link: "#careers",
        },
        {
            name: "Contact Us",
            link: "#contact",
        }
    ]

    useEffect(() => {

        let timeoutId;

        // Function to handle scroll events
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            if (currentPosition > scrollPosition || currentPosition < scrollPosition) {
                // Set 'scrolling' to true when the user has scrolled down a certain amount (e.g., 100 pixels)
                setScrolling(true);
            } else {
                // Set 'scrolling' to false when the user scrolls back up
                setScrolling(false);
            }

            // Reset the timeout whenever there's a scroll event
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                // Reset 'scrolling' to false after 3 seconds of inactivity
                setScrolling(false);
            }, 2000); // 3000 milliseconds = 3 seconds
            
        };

        // Add a scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Clear the timeout to avoid memory leaks
            clearTimeout(timeoutId);
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
                                    hash === item.link || (hash === "" && item.link === "#home") ? "primary" : "foreground"
                                }
                                className="w-full py-2"
                                href={item.link}
                                size="lg"
                                onClick={(e) => {
                                    e.stopPropagation(); // Stop event propagation
                                    setIsMenuOpen(!isMenuOpen); // Close menu on NextLink click
                                }}
                            >
                                {item.name}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>

            {/* header for desktop */}

            <header className={!scrolling ? 'bg-white backdrop-blur-md bg-opacity-50 top-0 hidden lg:flex w-full justify-between items-center py-6 fixed sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-1000 -translate-y-0' : 'bg-white backdrop-blur-md bg-opacity-50 top-0 hidden lg:flex w-full justify-between items-center py-6 fixed sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-1000 -translate-y-40'
            }>

                <Link to='/'>
                    <img src={Logo} alt="" className='w-40 h-auto' />
                </Link>

                <nav className='flex gap-3'>

                    {
                        menuItems.map((item, index) => {
                            return (
                                <a
                                    href={item.link}
                                    key={index}
                                    className={hash === item.link || (hash === "" && item.link === "#home") ? 'text-blue-600 font-medium' : 'text-black'}
                                >
                                    {item.name}
                                </a>
                            )
                        })
                    }

                </nav>

                <Link href='/coming-soon' className='w-max bg-sky-200 h-max text-blue-600 px-10 py-2 rounded-full'>Courses</Link>

            </header>

        </>
    )
}
export default Header;

