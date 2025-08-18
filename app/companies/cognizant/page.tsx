import { IconBrain, IconBuildingSkyscraper, IconClipboardList, IconCloudComputing, IconMessage, IconMessageCircle, IconUserUp } from '@tabler/icons-react'
import { Feature } from '@/components/feature-section-with-hover-effects'
import Link from 'next/link'

const basics = [
	{
		title: 'Company Information',
		description: 'Overview, history, and global presence of Cognizant company.',
		icon: <IconBuildingSkyscraper />,
		link: 'cognizant/info',
	},
	{
		title: 'Recruitment Process',
		description: 'Steps from registration to final offer at Cognizant.',
		icon: <IconUserUp />,
		link: 'cognizant/recruitment',
	},
	{
		title: 'Job Role Descriptions',
		description: 'Details of GenC, GenC Pro, and other roles.',
		icon: <IconClipboardList />,
		link: 'cognizant/jobs',
	},
]

const communication = [
	{
		title: 'Reading',
		description: 'Practice passages, comprehension, and vocabulary enhancement tasks.',
		icon: <IconMessage />,
		link: 'cognizant/communication/1',
	},
	{
		title: 'Speaking',
		description: 'Spoken English skills for AI-based communication round.',
		icon: <IconMessage />,
		link: 'cognizant/communication/2',
	},
	{
		title: 'Grammar',
		description: 'Test your grammar basics, tenses, and sentence structures.',
		icon: <IconMessage />,
		link: 'cognizant/grammar',
	},
]

const aptitude = [
	{
		title: 'Quantitative',
		description: 'Covers arithmetic, algebra, percentages, and logical reasoning basics.',
		icon: <IconBrain />,
		link: 'cognizant/aptitude',
	},
]

const technical = [
	{
		title: 'Cluster 1 (Java SQL Web)',
		description: 'Covers Java programming, SQL queries, and web technologies.',
		icon: <IconCloudComputing />,
		link: 'cognizant/technical/1',
	},
	{
		title: 'Cluster 2 (Python SQL Cloud)',
		description: 'Python scripting, cloud fundamentals, and database skills tested.',
		icon: <IconCloudComputing />,
		link: 'cognizant/technical/2',
	},
	{
		title: 'Cluster 3 (C# SQL Web)',
		description: 'Focus on C#, SQL handling, and basic web development.',
		icon: <IconCloudComputing />,
		link: 'cognizant/technical/3',
	},
]

const interview = [
	{
		title: 'Gen C Level',
		description: 'Covers basic technical and HR interview for freshers.',
		icon: <IconMessageCircle />,
		link: 'cognizant/interview/1',
	},
	{
		title: 'Gen C Pro Level',
		description: 'Advanced technical interviews for skilled candidates with projects.',
		icon: <IconMessageCircle />,
		link: 'cognizant/interview/2',
	},
	{
		title: 'Gen C Next Level',
		description: 'Highly technical, role-specific interviews for top-tier candidates.',
		icon: <IconMessageCircle />,
		link: 'cognizant/interview/3',
	},
]

export default function page() {
	return (
		<div className='bg-black p-10 py-12 md:py-16 lg:py-32'>
			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-neutral-100 text-center mb-8'>
				Cognizant Campusing
			</h1>
			<p className='pb-20 text-neutral-300 max-w-5xl mx-auto text-base md:text-lg'>
				Cognizant is a global professional services company that provides IT services, including digital transformation, consulting, and business process outsourcing. Headquartered in the U.S., it helps clients modernize technology, streamline operations, and enhance customer experiences across industries such as healthcare, finance, retail, and manufacturing.
				<br /><br />
				CEO: Ravi Kumar S
				<br />
				<a target='_blank' href='https://www.cognizant.com/us/en' className='text-blue-500'>Website Link</a>
			</p>
			<p className='px-10'>Basic Information about Company and Process</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto'>
				{basics.map((feature) => (
					<Link href={feature.link} key={feature.title} className='contents'>
						<Feature {...feature} />
					</Link>
				))}
			</div>
			<p className='px-10'>Communication Assessment Round</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto'>
				{communication.map((feature) => (
					<Link href={feature.link} key={feature.title} className='contents'>
						<Feature {...feature} />
					</Link>
				))}
			</div>
			<p className='px-10'>Aptitude Assessment Round</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto'>
				{aptitude.map((feature) => (
					<Link href={feature.link} key={feature.title} className='contents'>
						<Feature {...feature} />
					</Link>
				))}
			</div>
			<p className='px-10'>Technical Assessment Round</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto'>
				{technical.map((feature) => (
					<Link href={feature.link} key={feature.title} className='contents'>
						<Feature {...feature} />
					</Link>
				))}
			</div>
			<p className='px-10'>Interview Round</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto'>
				{interview.map((feature) => (
					<Link href={feature.link} key={feature.title} className='contents'>
						<Feature {...feature} />
					</Link>
				))}
			</div>
		</div>
	)
}
