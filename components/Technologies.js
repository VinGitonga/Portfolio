import {technologies} from '../data/tech'

const Technologies = () => {
    return (
        <section id="tech" className="mt-24">
            <h2 className="sectionTitle">
                Technologies
            </h2>
            <div className='sectionTitleBorderBottom'></div>
            <div className="container grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 my-16">
                {technologies.map((tech, i) => (
                    <div key={i} className="w-44 h-12 rounded-xl border-2 border-black flex justify-around items-center">
                        <img src={tech.image} className="object-contain w-10 h-10" alt="" />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies
