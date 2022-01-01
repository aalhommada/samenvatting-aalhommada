/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="about samenvatten">
      <h1 className="text-5xl border-b-4 border-indigo-400 py-6 font-bold mx-3 text-center">Over Ons</h1>
      <div
        className="bg-white shadow-md rounded-lg px-10 py-6
            mt-6"
      >
{/* ALi */}
        <div className="my-3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/images/author/ali.jpeg"
                alt="Ali Al Hommada"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Ali Al Hommada
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Ik ben Ali
              </a>
              <p className="mt-2 text-gray-500">
                Ik ben 11 jaar oud. Ik hou van het lezen, en Ik ben van een plan
                om samenvatting te maken van de boeken die ik gelezen heb
                waardoor andere kinderen kunnen het gebruiken met hun
                boekbespreken. Ik hoop dat ik op dit manier kan ik jullie meer
                motiveren om meer boeken te lezen.
              </p>
            </div>
          </div>
        </div>
{/* Zain */}
        <div className="my-3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/images/author/zain.jpeg"
                alt="Ali Al Hommada"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Zain Al Hommada
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Ik ben Zain
              </a>
              <p className="mt-2 text-gray-500">
                Ik ben 9 jaar oud. Ik hou van het lezen, en Ik ben van een plan
                om samenvatting te maken van de boeken die ik gelezen heb
                waardoor andere kinderen kunnen het gebruiken met hun
                boekbespreken. Ik hoop dat ik op dit manier kan ik jullie meer
                motiveren om meer boeken te lezen.
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </Layout>
  );
}
