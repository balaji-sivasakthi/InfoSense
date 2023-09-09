type Props = {}

function HowToUse({}: Props) {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <span className='text-blue-700'>How to Use?</span>
        <h1 className='text-bold text-2xl'>Easy to Use</h1>
        <div className='w-full flex justify-between'>
            <div className='w-6/12 text-center'>
                <span className='text-blue-700 text-4xl'>Step 1</span>
                <p className='text-xl'>Enter the News Article Url</p>
            </div>
            <div className='w-6/12 text-center'>
            <span className='text-blue-700 text-4xl'>Step 1</span>
                <p className='text-xl'>Enter the News Article Url</p>
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
                <span className='text-blue-700 text-4xl'>Step 3</span>
                <p className='text-xl'>View the Result</p>
        </div>
    </div>
  )
}

export default HowToUse