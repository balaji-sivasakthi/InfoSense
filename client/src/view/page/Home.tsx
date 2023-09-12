import Feature from '../../containers/Feature';
import Hero from '../../containers/Hero';
import HowToUse from '../../containers/HowToUse';
import HomeLayout from '../../layouts/HomeLayout';

type Props = {};

function HomePage({}: Props) {
    return (
        <HomeLayout>
            <Hero />
            <Feature />
            <HowToUse />
        </HomeLayout>
    );
}

export default HomePage;
