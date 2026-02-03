import { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
    title: "Work | Kushagra",
    description: "A collection of projects and work by Kushagra.",
};

export default function WorkPage() {
    return <WorkContent />;
}
