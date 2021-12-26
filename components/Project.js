import { useRouter } from 'next/router'

const Project = ({ data }) => {
    const router = useRouter()
    return (
        <div className="mb-24">
            <h2 className="font-bold text-3xl mb-12">
                {data.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <img src={data.screenshot} className="rounded-lg object-contain w-full h-{280px}" alt="" />
                <div>
                    <h3 className="mb-6 text-xl text-slate-700">Description</h3>
                    <p className="my-3">{data.description}</p>
                    <h3 className="my-6 text-xl text-slate-700">Stack</h3>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
                        {data.techs.map((tech, i) => (
                            <div key={i} className="px-12 py-2 border-2 border-gray-900 text-gray-700 rounded-3xl">
                                {tech}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-start items-center flex-row mt-8">
                        <div className="rounded-3xl py-2 px-10 bg-cyan-800 text-white cursor-pointer hover:bg-cyan-700" onClick={() => router.push(data.codeUrl)} >
                            Code
                        </div>
                        {data.demoUrl !== null ? (
                            <div className="rounded-3xl py-2 px-10 hover:font-bold text-cyan-800 bg-white border-2 border-sky-900 ml-8 cursor-pointer" onClick={() => router.push(data.demoUrl)}>
                                Demo
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
