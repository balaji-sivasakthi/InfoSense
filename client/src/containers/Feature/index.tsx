import screenshot from './../../assets/images/dashboard.png'

type Props = {}

function Feature({}: Props) {
  return (
    <section id='feature' className=' flex justify-center p-[100px]'>
        <img className='rounded-lg'  height={600} src={screenshot} alt="" />
    </section>
  )
}

export default Feature