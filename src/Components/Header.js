import { Fragment } from 'react';
import LittleLemonLogo from '../images/Logo.svg';


const Header = () => {
    const navLinks = [
        {
            text: "Home",
            url: "/",
            sectionID: 'home',
        },
        {
            text: "About",
            url: "/#about",
            sectionID: 'about',
        },
        {
            text: "Menu",
            url: "/#menu",
            sectionID: 'menu',
        },
        {
            text: "Reservations",
            url: "/booking",
            sectionID: 'reservations',
        },
        {
            text: "Order Online",
            url: "/#order",
            sectionID: 'order',
        },
        {
            text: "Login",
            url: "/#login",
            sectionID: 'login',
        },
    ]



    return (
<Fragment>

  


        <div className='segment three-nine text-sm pt-[3%] pb-[3%]'>
            <nav className="w-full">
                <div className="w-full flex justify-between items-center">
                    <a href='/#home'><img src={LittleLemonLogo} alt="Logo" /></a>

                    <ul className="w-full flex justify-between pl-[3%]">
                        {
                            navLinks.map((navLink) => {
                                return (
                                    <li>
                                        <navLink><a href={navLink.url}>{navLink.text}</a></navLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>


        </div>
     
</Fragment>





    );
}

export default Header;