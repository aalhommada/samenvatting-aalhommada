import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout"

export default function NotFound() {
    return (
        <Layout title='niet gevonden'>
            <div className="flex flex-col items-center mt-20">
                <Image src="/images/logo.png" alt="404" width={70} height={70}
                className="bg-gray-800 rounded-2xl" />

                <h1 className="text-5xl font-bold mt-10 my-5">
                    Whoops!
                </h1>
                <h2 className="text-2xl font-bold mt-10">
                    Pagina niet gevonden
                </h2>

            </div>
            
        </Layout>
    )
}
