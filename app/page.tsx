import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
    return (
      <div style={{
          backgroundImage: "url('/linear_gradient.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "[80%]", // Adjusts width to cover entire container, height adjusts automatically
          backgroundPosition: "top", // Place the background at the bottom
          minHeight: "100vh", // Ensure the background covers the entire viewport height
          paddingBottom: "10px", // Add padding at the bottom to create space
          overflow: "hidden",
      }}>
          <Navbar/>
          <main>
            <Hero/>
          </main>
        </div>
    );
}
