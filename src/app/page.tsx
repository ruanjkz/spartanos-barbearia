import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import * as Scroll from 'react-scroll';

export default function Home() {
  return (
    <div className="bg-gray-200 flex flex-col pb-12">
      <Hero/>
      <Services/>
      <Gallery/>
      <div className="text-neutral-900 text-xl font-semibold uppercase self-center whitespace-nowrap mt-24 max-md:mt-10">
        quer nos encontrar?
      </div>
      <div className="text-neutral-900 text-center text-6xl font-extrabold leading-[50.22px] uppercase self-center whitespace-nowrap mt-2 max-md:text-4xl">
        como chegar
      </div>
      <img
        src="./Map Container.png"
        className="aspect-[2.87] object-contain object-center w-full overflow-hidden self-stretch mt-16  max-md:max-w-full max-md:my-10"
      />
    </div>
  );
}
