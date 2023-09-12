import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

type Props = {}

function Hero({}: Props) {
    const navigate = useNavigate()
    return (
        <section
            id="home"
            className="flex flex-col h-screen justify-center items-center space-y-4"
        >
            <span className="text-2xl text-blue-700 text-center">
                Meet InfoSense
            </span>
            <h1 className="text-5xl text-center px-[250px]">
                Empower Your News Classification with Our Cutting-Edge AI
                Technology.
            </h1>
            <p className="text-gray-200 px-[250px] text-center">
                Transform your news classification with our advanced AI. Easily
                categorize articles, gain a competitive advantage, and stay
                ahead in your industry.
            </p>
            <Button onClick={() => navigate('/app/dashboard')}>
                Try For Free
            </Button>
        </section>
    )
}

export default Hero
