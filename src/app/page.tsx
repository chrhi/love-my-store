import StoreBanner from "@/components/StoreBanner";
import FadeIn from "@/components/animations/FadeIn";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen ">
      <Header />
      <StoreBanner />
      <FadeIn>
        <section className=" w-full bg-black px-8 pt-4 pb-8">
          <Footer />
        </section>
      </FadeIn>
    </main>
  );
}
