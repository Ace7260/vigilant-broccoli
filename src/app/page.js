import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
// import code from "../../public/code.png";
// import consulting from "../../public/consulting.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ace1</title>
        <meta name="description" content="Ace7260's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/ace7260/"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Irakoze Eddy Nobel
            </h2>
            <h3 className="text-2xl py-2">Developer and designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming nedds. Join me down
              below and let&apos;s get cracking
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} alt="" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the begining of my journey as freelance designer and
              developer , I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startup </span>and collaborated
              with talented people to create digital for both business and
              consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10">
              <Image src={design} alt="" width={150} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
