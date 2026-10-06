import {useEffect, useRef, useContext} from "react";
import logo from "../../assets/images/logo.png";     
import {NavLink, Link} from 'react-router-dom';
import {BiMenu} from "react-icons/bi";
import {AuthContext} from '../../context/AuthContext.jsx';
const navLinks = [
    {
        path: "/",
        display: "Home"
    }, 
       {
        path: "/doctors",
        display: "Find a Doctor"
    },    {
        path: "/services",
        display: "Services"
    },    {
        path: "/contact",
        display: "Contact"
    }, 
]
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const {user, role, token} = useContext(AuthContext);

const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("sticky__header");
        }else{
            headerRef.current.classList.remove("sticky__header");
        }
} )

}
useEffect(() => {
    handleStickyHeader()

    return () =>{ window.removeEventListener("scroll", handleStickyHeader)
    };
},[]);

const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
    console.log(menuRef.current.className);
};

    return (<header className="header flex items-center" ref={headerRef}>
        <div className="header-container">
            <div className = "flex items-center justify-between">
                {/*======= logo =======*/}
                <div>
                    <img src = {logo} alt = "Logo"/>
                </div>


            {/*======= menu =======*/}
            <div className = "navigation" ref = {menuRef} onClick = {toggleMenu}>
                <ul className = "menu flex items-center gap-[2.7rem]">
                    {
                        navLinks.map((link, index) => (
                        <li key = {index} className = "navItem">  
                            <NavLink to = {link.path} className = {({isActive}) => isActive ? "text-primaryColor text-[16px] leading-7 font-[600]"  : "text-textColor text-[16px] leading-7 font-[600]"}>
                                {link.display}
                            </NavLink>
                        </li>
                        ))      
                    }
                </ul>
            </div>

            {/*======= navRight =======*/}
            <div className = "flex items-center gap-4">
                {
                    token && user  ? <div>
                        <Link to={`${role === 'doctor' ? '/doctor/profile/me' : '/user/profile/me'}`}>
                        <figure className = "w-[35px] h-[35px] rounded-full cursor-pointer">
                            <img src={user?.photo} className = "w-full rounded-full" alt="" />
                        </figure>
                        </Link>
                    </div> : <Link to="/login">
                        <button className="bg-primaryColor h-12 min-w-[90px] px-6 text-white text-[16px] font-[600] flex items-center justify-center rounded-full">
                            Login
                        </button>
                    </Link>
                }
                    
                    
                    
                    <span className="md:hidden" onClick={toggleMenu}>
                        <BiMenu className = " h-6 w-6 cursor-pointer"/>
                    </span>
            </div>
            </div>
            </div> 
    </header>
    );

};
export default Header;
