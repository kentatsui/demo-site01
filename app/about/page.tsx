import { Metadata } from "next";
import Hero from "./components/hero";
import Features from "./components/features";

export const metadata: Metadata = {
  title: "about",
  description: "でもデモサイト",
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
