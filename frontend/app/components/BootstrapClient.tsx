"use client"; // 클라이언트 사이드에서만 실행되도록 선언

import { useEffect } from "react";

export default function BootstrapClient() {
    useEffect(() => {
        // 브라우저 환경에서만 bootstrap js를 불러옵니다.
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return null; // 화면에 아무것도 그리지 않음
}