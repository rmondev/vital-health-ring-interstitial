"use client";

import Image from "next/image";
import Navigation from "../components/Navigation";
import DontMissHeader from "@/components/DontMissHeader";
import Page1 from "@/components/Page1";

export default function Home() {
  return (
    <>
    <DontMissHeader />
    <Navigation />
    <Page1/>
    </>
  )
}
