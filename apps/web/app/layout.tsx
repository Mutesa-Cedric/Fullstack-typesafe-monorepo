import type { Metadata } from "next";
import { Providers } from "./providers";
import "../src/styles/global.css";

export const metadata: Metadata = {
    title: "Web App",
    description: "Fullstack typesafe monorepo",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
