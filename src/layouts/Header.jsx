import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextLink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
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

            <Navbar onMenuOpenChange={setIsMenuOpen} className='flex sm:hidden'>

                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <img src={Logo} alt="" className=' flex w-40 h-auto' />
                    </NavbarBrand>
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

            {/* <Navbar shouldHideOnScroll className='hidden sm:flex pt-5 items-center'>

                <NavbarContent className='w-max'>
                    <img src={Logo} alt="" className='w-40 h-auto' />
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4 w-max" justify='center'>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            About Us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" aria-current="page">
                            Careers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Contact Us
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify='end' className='w-max'>
                    <NavbarItem>
                        <Button as={NextLink} color="primary" href="#" variant="flat" className='rounded-full h-max w-max py-2 px-10'>
                            Courses
                        </Button>
                    </NavbarItem>
                </NavbarContent>

            </Navbar> */}

            <header className={!scrolling ? 'bg-white backdrop-blur-md bg-opacity-50 top-0 flex w-full justify-between items-center py-6 fixed sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-1000 -translate-y-0' : 'bg-white backdrop-blur-md bg-opacity-50 top-0 flex w-full justify-between items-center py-6 fixed sm:px-8 md:px-16 lg:px-24 xl:px-32 duration-1000 -translate-y-40'}>

                <Link to='/'>
                    <img src={Logo} alt="" className='w-40 h-auto' />
                </Link>

                <nav className='flex gap-3'>

                    <Link>Home</Link>
                    <Link>About US</Link>
                    <Link>Services</Link>
                    <Link>Careers</Link>
                    <Link>Contact Us</Link>

                </nav>

                <Link className='w-max bg-sky-200 h-max text-blue-600 px-10 py-2 rounded-full'>Courses</Link>

            </header>

        </>
    )
}
export default Header;

