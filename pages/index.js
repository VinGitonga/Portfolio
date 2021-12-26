import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Showcase from '../components/Showcase'
import Technologies from '../components/Technologies'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="bg-gray-50 h-screen max-w-6xl mx-5 xl:mx-auto">
            <Head>
                <title>Vincent Gitonga</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Showcase />
            <About />
            <Technologies />
            <Projects />
            <ViewCompleteDirectoryButton />
            <Footer />
        </div>
    )
}

const ViewCompleteDirectoryButton = () => {
    const router = useRouter()
    return (
        <div className="w-64 mx-auto h-14 bg-slate-200 hover:font-bold hover:bg-slate-400 text-gray-900 rounded-3xl cursor-pointer mt-4 flex items-center justify-center" onClick={() => router.push('https://github.com/VinGitonga')}>
            View Complete Directory
        </div>
    )
}