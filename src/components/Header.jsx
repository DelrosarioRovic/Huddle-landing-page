import logo from "../assets/images/logo.svg";

const Header = () => {
    
    return (
        <div className="flex justify-between p-10">
            <div>
                <img src={logo} alt="" />
            </div>
            <button className="py-3 px-10 bg-white shadow-lg rounded-3xl font-bold">Try It Free</button>
        </div>
    )
    
}

export default Header;