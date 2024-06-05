import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/linear_gradient.png')" }}>
          <main className="relative z-10" >
            <Navbar/>
              <div>
                <Hero/>
              </div>
          </main>
        </div>
      </div>
    );
}
