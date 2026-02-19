import { Metadata } from "next";
import HomeClient from "./home/HomeClient";

export const metadata: Metadata = {
    title: "Kushagra | Developer & AI Enthusiast",
    description: "Portfolio of Kushagra, a Developer and AI Enthusiast.",
};

export default function HomePage() {
    return <HomeClient />;
}
