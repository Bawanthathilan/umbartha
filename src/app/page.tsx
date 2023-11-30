"use client"
import HomePage from "./home/page";

import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </main>
  );
}
