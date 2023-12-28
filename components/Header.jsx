'use client'
import { Button, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import React from 'react';

const menuItems = [
    {href: "/", label: 'Home'},
    {href: "/post", label: 'Posts'},
    {href: "/about", label: "About"},
    {href: "/categories", label: 'Categories'},
  ];

const Header = () => {
    // const items = menuItems.map(i => <li>{i}</li>)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const navLinks = [
        {href: "/", label: 'Home'},
        {href: "/post", label: 'Posts'},
        {href: "/about", label: 'About'},
        {href: "/categories", label: 'Categories'},
        {href: "/studio", label: 'Studio'},
    ]

    return (
        <header className="light light:bg-gray-400 w-full">
        {/* <Navbar isBordered className="flex items-center justify-between text-gray-600 dark:text-gray-400 ">
                <NavbarContent justify="start">
                    <NavbarBrand className="flex items-center justify-between">
                        <Link href='/' className="flex">
                            <Image 
                                src='/images/blkLogo.png'
                                height='56'
                                width='56'
                                alt="BLK logo"
                            />
                            <span className="hidden md:block self-center px-1 text-md font-semibold dark:text-white">Tech</span>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                    {navLinks?.map((link) => (
                <NavbarContent  className=" sm:flex gap-4" justify="center">
                        <NavbarItem key={link.href} isActive>
                            <Link color="foreground"  className="hover:text-[#2a86ff] text-[12px]" href={link.href}>{link.label}</Link>
                        </NavbarItem>
                </NavbarContent>
                    ))}

                <NavbarContent as='div' className="items-center sm:hidden lg:flex" justify="end">
             
                    <NavbarItem className="hidden lg:flex">
                        <Link href='/signup' className="text-slate-500 px-2 py-2 mr-3 rounded-lg hover:bg-slate-800 hover:text-neutral-400">
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} className="bg-[#2a86ff] opacity-60 hover:opacity-100" href="/" variant="flat">Sign Up</Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>

        ))}
        </NavbarMenu>
        </Navbar> */}
         <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                <Image 
                    src='/images/blkLogo.png'
                    height='56'
                    width='56'
                    alt="BLK logo"
                    className="mr-1"
                />
                <p className="font-bold text-inherit">Talk</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {navLinks?.map((link) => (
                <NavbarContent  className=" sm:flex gap-4" justify="center">
                        <NavbarItem key={link.href} isActive>
                            <Link color="foreground"  className="hover:text-[#2a86ff] text-[12px]" href={link.href}>{link.label}</Link>
                        </NavbarItem>
                </NavbarContent>
            ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    href={`${item.href}`}
                    size="lg"
                    >
                    {item.label}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
    </Navbar>
        </header>
    )
}

export default Header;