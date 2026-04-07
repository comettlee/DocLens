"use client";

import { useState } from "react";

export default function Home() {
    const [query, setQuery] = useState("");

    return (
        <div className="d-flex flex-column h-100 position-relative">

            {/* 1. 대화 내역 영역 (스크롤) */}
            <div className="flex-grow-1 overflow-auto px-2 py-4" style={{ paddingBottom: '100px' }}>
                <div className="container-sm" style={{ maxWidth: '800px' }}>

                    {/* AI 시작 메시지 */}
                    <div className="d-flex mb-5">
                        <div className="flex-shrink-0">
                            <div className="bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: "40px", height: "40px" }}>
                                <i className="bi bi-stars fs-5"></i>
                            </div>
                        </div>
                        <div className="ms-3 pt-1">
                            <h5 className="fw-bold mb-1">DocLens AI</h5>
                            <p className="text-secondary mb-3">반가워요, 혜성님! 분석할 문서를 업로드하거나 궁금한 내용을 물어보세요.</p>

                            {/* 추천 질문 (Starters) */}
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                <button className="btn btn-outline-primary btn-sm rounded-pill px-3">📄 최근 업로드한 PDF 요약</button>
                                <button className="btn btn-outline-primary btn-sm rounded-pill px-3">🔍 프로젝트 아키텍처 설명</button>
                                <button className="btn btn-outline-primary btn-sm rounded-pill px-3">💡 기술 스택 추천</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0 bg-light py-4 border-top">
                <div className="container-sm" style={{ maxWidth: '800px' }}>
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-body p-2 d-flex align-items-center bg-white">

                            <button className="btn btn-link text-secondary p-2" type="button">
                                <i className="bi bi-plus-circle fs-4"></i>
                            </button>

                            <textarea
                                className="form-control border-0 shadow-none py-2"
                                placeholder="어떤 지식을 탐색해 볼까요?"
                                rows={1}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{ resize: 'none', background: 'transparent' }}
                            />

                            {/* 전송 버튼 - 태그 닫기 수정됨 */}
                            <button
                                className={`btn btn-primary rounded-3 px-3 py-1 ms-2 ${query ? '' : 'disabled opacity-50'}`}
                                type="button"
                            >
                                <i className="bi bi-arrow-up-short fs-4"></i>
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-2">
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                            DocLens는 문서를 기반으로 답변하며 실수를 할 수 있습니다.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}