import React from 'react'

const page = () => {
    return (
        <div className='max-w-5xl mx-auto pt-40 text-center space-y-4'>
            <h2 className='text-3xl font-bold text-blue-400'>OpenDocs — the Open Source Documentation</h2>
            <p className='text-gray-300 text-lg'>
                <strong>OpenDocs</strong> is an initiative by the forward-thinking team at <strong>OpenNova Tech</strong>,
                dedicated to building a centralized, collaborative, and open-source documentation ecosystem for developers.
            </p>
            <p className='text-gray-400 text-base'>
                We aim to eliminate scattered resources, outdated guides, and paywalled knowledge by creating a
                <em> living library of developer documentation</em> — open to everyone, built by the community, and maintained with passion.
                Our team believes that great documentation shouldn&apos;t just <em>explain</em>, it should <em>inspire</em>. Whether you&apos;re a beginner looking for clarity or a veteran dev seeking precision, OpenDocs is crafted to be your daily companion.
            </p>
            <p className='italic text-sm text-gray-600'>
                &quot;We don&apos;t just document software. We document how people learn, build, and grow with it.&quot;
            </p>
        </div>
    )
}

export default page