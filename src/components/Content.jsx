import flowConvo from "../assets/images/illustration-flowing-conversation.svg";
import growToge from "../assets/images/illustration-grow-together.svg";
import yourUser from "../assets/images/illustration-your-users.svg";

const Obj = [
  {
    img: growToge,
    title: "Grow Together",
    p: "Generate meaningful discussion with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
  },
  {
    img: flowConvo,
    title: "Flowing Conversations",
    p: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    img: yourUser,
    title: "Flowing Conversations",
    p: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

const Content = () => {
  return (
    <div className="flex flex-col max-w-7xl py-5 gap-40 text-gray-700 max-md:px-5">
      {Obj.map((obj, index) => (
        <div key={index} className={`flex max-md:flex-col ${index===1 && "flex-row-reverse"} justify-center items-center shadow-lg rounded-2xl overflow-hidden outline outline-1 outline-gray-200 p-5 gap-5`}>
          <div className="flex flex-col gap-6 py-10 px-14 w-[45%] max-md:w-full">
            <h2 className="font-bold text-3xl">{obj.title}</h2>
            <p>{obj.p}</p>
          </div>
          <div className="w-[45%] max-md:w-full">
            <img src={obj.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
