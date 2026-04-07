# 🔍 DocLens (AI-Powered Document Management System)

**DocLens**는 대규모 문서 데이터에서 의미론적 검색(Semantic Search)과 시계열 대화 이력을 결합한 **Hybrid RAG(Retrieval-Augmented Generation)** 시스템입니다. 사용자의 문서를 분석하여 지식화하고, AI와의 대화를 통해 필요한 정보를 정확하게 추출합니다.

## 🚀 Key Features

* **Hybrid Architecture**: `pgvector`를 이용한 벡터 유사도 검색과 `TimescaleDB`를 이용한 고성능 시계열 대화 로그 관리.
* **Semantic Search**: OpenAI의 Embedding 모델을 활용하여 키워드가 아닌 '의미' 중심의 문서 검색 지원.
* **Context-Aware Chat**: 과거 대화 이력을 효율적으로 참조하여 답변의 정확도를 높이는 RAG 기반 챗봇.
* **Modern Tech Stack**: Next.js 14(App Router)와 FastAPI를 결합한 고성능 풀스택 구조.

## 🛠 Tech Stack

### Frontend
* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **State Management**: Zustand / TanStack Query

### Backend
* **Framework**: FastAPI (Python)
* **Database**: PostgreSQL 16
    * **Vector Engine**: `pgvector` (HNSW Indexing)
    * **Time-Series Engine**: `TimescaleDB` (Hypertables)
* **Containerization**: Docker & Docker Compose

### AI & Data
* **Embedding Model**: OpenAI `text-embedding-3-small` (1,536 dim)
* **LLM**: GPT-4o / Claude 3.5 Sonnet

## 🏗 System Architecture (Hybrid Storage)

```sql
-- Vector Area: Document Chunks for Semantic Search
-- Index: HNSW (Hierarchical Navigable Small World)
CREATE TABLE document_chunks (
    id SERIAL PRIMARY KEY,
    embedding vector(1536),
    content TEXT,
    ...
);

-- Time-Series Area: Chat Messages for History Management
-- Managed by TimescaleDB Hypertables
CREATE TABLE chat_messages (
    id SERIAL,
    created_at TIMESTAMP WITH TIME ZONE,
    content TEXT,
    PRIMARY KEY (id, created_at)
);
```

## 📦 Getting Started

### Prerequisites
* Docker & Docker Compose
* OpenAI API Key

### Infrastructure Setup
```bash
# Docker 컨테이너 기동 (TimescaleDB + pgvector)
docker-compose up -d

# Database 확장 활성화 및 스키마 적용
# DataGrip 또는 psql에서 실행
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS timescaledb;
```

---

## 💡 Project Memo (7th Year Dev Insight)

* **Efficiency**: 대화 데이터가 쌓일수록 성능이 저하되는 문제를 방지하기 위해 `TimescaleDB` 파티셔닝 정책 적용.
* **Scalability**: 임베딩 모델 변경 시 리인덱싱(Re-indexing)이 용이하도록 원본 텍스트와 벡터 데이터를 분리하여 설계.
* **UX**: `shadcn/ui`와 `Tailwind CSS`를 활용하여 직관적이고 빠른 반응형 인터페이스 구축.

---

### 🏠 향후 로드맵
- [ ] FastAPI 백엔드 API 엔드포인트 구현
- [ ] PDF/Markdown 파서 및 텍스트 청킹 로직 고도화
- [ ] Next.js 기반 실시간 채팅 UI 인터페이스 완성

---

이 `README.md`는 현재까지 우리가 논의한 **하이브리드 아키텍처**와 **기술 스택**을 모두 포함하고 있습니다. 프로젝트 폴더에 넣어두시면 나중에 다시 코드를 볼 때 흐름을 잡기 편하실 거예요. 

5시 퇴근 전까지 문서 정리는 이 정도면 충분해 보입니다! 추가로 더 보충하고 싶은 내용이 있으신가요? 🚀
