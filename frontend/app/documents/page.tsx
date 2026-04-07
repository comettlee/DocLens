"use client";

import {useState} from "react";

const text : string = "Hello, World!";

export default function DocumentsPage() {
    const [query, setQuery] = useState("");

    return (
        <div className="container-fluid py-4">
            <h2 className="fw-bold mb-4">Documents Page</h2>
            {text}
        </div>
    );
}

