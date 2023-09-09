import Hero from '../../containers/Hero'
import HomeLayout from '../../layouts/HomeLayout'

type Props = {}

function HomePage({}: Props) {
  return (
    <HomeLayout>
      <Hero/>
    </HomeLayout>
  )
}

export default HomePage