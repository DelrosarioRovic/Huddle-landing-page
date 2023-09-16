import mockUps from "../assets/images/illustration-mockups.svg";

const Introduction = () => {
    return (
        <div className="pb-20">
            <div className="py-10 flex justify-between items-center max-md:flex-col">
                <div className="p-10 w-[45%] max-md:w-full">
                    <h1 className="font-bold text-4xl opacity-90 leading-relaxed mb-5">Build The Commuinity Your Fans Will Have Love</h1>
                    <p className="font-semibold opacity-80 mb-5">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button className="bg-pink-500 py-3 px-12 text-white rounded-3xl">Get Started For Free</button>
                </div>
                <div className="w-[45%] px-10 max-md:w-full"> 
                    <img src={mockUps} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Introduction;