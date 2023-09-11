import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

type Props = {};

function Hero({}: Props) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-4 px-[250px]">
      <span className="text-xl text-blue-700 text-center">Meet InfoSense</span>
      <h1 className="text-6xl text-center mb-10">
        Unlock the Power of AI Writing for Exceptional Content.
      </h1>
      <p className="text-gray-200 text-center">
        Revolutionize your content creation with advanced AI. Create exceptional
        content quickly and easily, and gain a leading edge in your industry.
      </p>
      <Button onClick={()=>navigate('/app/dashboard')}>Try For Free</Button>
    </div>
  );
}

export default Hero;
