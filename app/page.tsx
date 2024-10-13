"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<string>("");

  return (
    <>
      <TopNav language={language} setLanguage={setLanguage} />
      <Hero />
      <Projects language={language} />
      <Footer />
    </>
  );
}
