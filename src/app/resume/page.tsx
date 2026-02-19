import { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
    title: "Resume | Kushagra",
    description: "Kushagra's Resume",
};

export default function Page() {
    return <ResumeClient />;
}
