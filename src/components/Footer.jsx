import {GrFacebookOption} from "react-icons/gr";
import {AiOutlineTwitter} from "react-icons/ai";
import  {AiFillInstagram} from "react-icons/ai";
import {FaLocationDot} from "react-icons/fa6";
import {IoIosCall} from "react-icons/io";
import {HiOutlineMail} from "react-icons/hi";
const Footer = () => {

    return (
        <div className="w-full flex flex-col justify-center items-center relative mt-40 ">
            <div className="outline outline-1 outline-gray-100 w-[700px] max-md:w-[95%] text-center flex flex-col gap-7 justify-center items-center absolute -top-28 z-10 bg-white rounded-xl shadow-lg px-5 py-16 overflow-hidden">
                <h3 className="font-bold text-3xl text-gray-700">Ready To Build Your Community</h3>
                <button className="text-white bg-pink-600 py-4 px-12 rounded-3xl">Get Started For Free</button>
            </div>
            <div className="max-md:p-10 max-md:gap-10 w-full max-md:flex-col bg-slate-700 text-white flex justify-center h-[500px] max-md:h-[1000px] items-center before:w-full before:h-[300px] relative before:absolute top-0">
                <div className="flex flex-col w-[30%] max-md:w-full px-5 gap-5">
                    <h2 className="font-bold text-3xl ">Huddle</h2>
                    <p className="flex items-start  gap-5"><FaLocationDot/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className="flex items-center gap-5"><IoIosCall />+1-543-123-4567</p>
                    <p className="flex items-center gap-5"><HiOutlineMail />example@huddle.com</p>
                </div>
                <ul className="flex flex-col w-[20%] max-md:w-full px-5 gap-5">
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <div className="flex flex-col w-[20%] max-md:w-full px-5 gap-5">
                    <li className="inline">Career</li>
                    <li className="inline">Blog</li>
                    <li className="inline">Contact Us</li>
                </div>
                <div className="flex flex-col w-[10%] max-md:w-full px-5 gap-5">
                    <GrFacebookOption />
                    <AiOutlineTwitter />
                    <AiFillInstagram />
                </div>
            </div>
           
        </div>
    )
}

export default Footer;