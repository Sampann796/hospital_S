import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'


const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path:"/",
    display:"About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path:"/",
    display:"Blog",
  },
];

const quicklinks02= [
    {
        path: "/find-a-doctor",
        display:"Find a Doctor",
    },
    {
        path: "/",
        display: "Request an Appointment",
    },
    {
        path: '/',
        display:'Find a Location',
    },
    {
        path:'/',
        display:'Get a Opinion',
    },
];

const quicklink03 = [
    {
        path: "/",
        display: "donate"
    },
    {
        path: "/contact",
        display: "Contact Us",
    }
];
 
const Footer = () => {
    const year = new Date().getFullYear()

    return <footer className="pb-16 pt-[100px]">
        <div className = "site-container">
            <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                <div>
                    <img src={logo} alt="" />
                    <p className="text-[16px] leading-7 font-[400] text-textColor">CopyRight  {year} developed by Sampann Arora all rights reserved</p>

                    <div className = "flex items-center gap-4 mt-4">
                      {/*  {socialLinks.map((link, index)=> <Link to={link.path} key={index}>{link.icon}</Link>)}      /*/}
                    </div>
                </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">QuickLinks</h2>

                        <ul>
                            {quickLinks01.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                            {item.display}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>

                        <ul>
                            {quicklinks02.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                            {item.display}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>

                        <ul>
                            {quicklink03.map((item,index)=> <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                            {item.display}</Link></li>)}
                        </ul>
                    </div>
                
            </div>
        </div>
    </footer>
}
export default Footer;
