import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout title='about samenvatten'>
            <h1 className="text-5xl border-b-4 pb-5 font-bold">Over mij</h1>
            <div className="bg-white shadow-md rounded-lg px-10 py-6
            mt-6">
                <h3 className="text-2xl mb-5">
                   Over samenvatten
                </h3>
                <p className="mb-3">
                Ik ben Ali Al Hommada

                Ik ben 11 jaar oud.
                Ik hou van het lezen, en Ik ben van een plan om samenvatting te maken van de boeken die ik gelezen heb waardoor andere kinderen kunnen het gebruiken met hun boekbespreken. Ik hoop dat ik op dit manier kan ik jullie meer motiveren om meer boeken te lezen.
                </p>

            </div>
            
        </Layout>
    )
}
