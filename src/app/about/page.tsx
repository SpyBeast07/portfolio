import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About | Kushagra",
    description: "Learn more about Kushagra, a Developer and AI Enthusiast.",
};

export default function AboutPage() {
    return <AboutContent />;
}
