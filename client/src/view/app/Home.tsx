import NavBar from '../../components/NavBar'
import Hero from '../../containers/Hero'
import HomeLayout from '../../layouts/HomeLayout'

type Props = {}

function HomePage({}: Props) {
  return (
    <HomeLayout>
      <NavBar/>
      <Hero/>
    </HomeLayout>
  )
}

export default HomePage