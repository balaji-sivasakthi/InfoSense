import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Props = {}

function HowToUse({ }: Props) {
  return (
    <section id="#how-to-use" className='flex flex-col justify-center items-center my-10'>
      <span className='text-blue-700 text-2xl mb-5'>Easy to Use</span>
      <h1 className='text-bold text-5xl mb-10'>How to Use?</h1>
      <div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h1 className="vertical-timeline-element-title text-xl font-bold">Step 1</h1>
            <p>
             Navigate to the application's URL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h1 className="vertical-timeline-element-title text-xl font-bold">Step 2</h1>
            <p>
            Input a news article URL and submit the form.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h1 className="vertical-timeline-element-title text-xl font-bold">Step 3</h1>
            <p>
              The application will scrape the article, predict its category, and display the result.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h1 className="vertical-timeline-element-title text-xl font-bold">Step 4</h1>
            <p>
            Explore the history section to view past classification requests.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </section>
  )
}

export default HowToUse