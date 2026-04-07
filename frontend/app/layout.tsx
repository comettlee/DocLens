import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// 클라이언트 전용 로더 가져오기
import BootstrapClient from "@/app/components/BootstrapClient";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DocLens - AI Knowledge Search",
    description: "RAG 기반 지식 탐색 시스템",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        {/* 1. vh-100, d-flex flex-column을 주어 브라우저 높이에 딱 맞춤 */}
        <body className={`${geistSans.variable} ${geistMono.variable} bg-light vh-100 d-flex flex-column overflow-hidden`}>
        <BootstrapClient />

        {/* 상단 네비게이션 바 (크기 고정) */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-shrink-0">
            <div className="container">
                <Link className="navbar-brand fw-bold" href="/">
                    DocLens
                </Link>
            </div>
        </nav>

        {/* 2. flex-grow-1을 주어 남은 가운데 공간을 모두 차지하게 함 */}
        <main className="container py-3 flex-grow-1 d-flex flex-column overflow-hidden">
            {children}
        </main>

        {/* 3. 푸터 여백 최소화 (채팅 UI에 방해되지 않도록 얇게 배치) */}
        <footer className="py-2 border-top text-center text-muted flex-shrink-0" style={{ fontSize: "0.85rem" }}>
            © 2026 DocLens Project
        </footer>
        </body>
        </html>
    );
}
