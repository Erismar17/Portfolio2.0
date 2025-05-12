const About = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <header className='w-full max-w-5xl'>
                <h2 className='lg:text-4xl mb-2 md:text-2xl'>Hi, my name is</h2>
                <h1 className='lg:text-6xl font-bold mb-2 md:text-4xl'>
                    Erismar Mendoza
                    <span className='lg:text-6xl md:text-4xl'>&lt;/&gt;</span>
                </h1>
                <h2 className='lg:text-4xl mb-10 md:text-2xl'>Front-End Developer</h2>
            </header>

            <section className='max-w-5xl'>
                <p className='text-lg leading-relaxed'>
                    I design and develop interfaces that look great and feel even better, paying close attention to both visuals and functionality.
                    I'm always learning, innovating, and solving problems creatively to build experiences that truly connect.
                </p>
            </section>
        </div>
    );
}
export default About;