"use client";

import Image from "next/image";
import Navigation from "../components/Navigation";
import DontMissHeader from "@/components/DontMissHeader";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page6 from "@/components/Page6";
import Page8 from "@/components/Page8";

export default function Home() {
  return (
    <>
    <DontMissHeader />
    <Navigation />
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/> 
    <Page6/>
    <Page8/> 
    </>
  )
}
