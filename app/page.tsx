import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import Navbar from "./Navbar";
import backgroundImage from "../public/linear_gradient.svg";

export default function Home() {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 h-[95vh]">
          <Image 
              src={backgroundImage}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="object-bottom"
          />
          <main className="relative z-10">
            <Navbar/>
              <div>
                <Hero/>
              </div>
          </main>
        </div>
      </div>
    );
}
