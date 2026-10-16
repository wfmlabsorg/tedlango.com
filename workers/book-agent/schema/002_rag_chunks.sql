-- Ask the Book retrieval store: the book (one row per anchored section) and the
-- WFM Labs wiki (one row per heading-sized chunk), embedded with Workers AI
-- bge-m3 (1024 dims). Hybrid search = pgvector cosine + Postgres full text,
-- fused in the worker's query (src/retrieve.ts). Populated by tools/rag-index.ts.
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS rag_chunks (
  id            serial PRIMARY KEY,
  source        text NOT NULL CHECK (source IN ('book', 'wiki')),
  doc_key       text NOT NULL,          -- book: chapter slug · wiki: page title
  chunk_key     text NOT NULL UNIQUE,   -- book: slug#anchor[~part] · wiki: wiki:<pageid>:<n>
  cite_key      text NOT NULL,          -- what the model cites: book slug#anchor · wiki "wiki-<id>" (set after insert)
  title         text NOT NULL,          -- book: chapter title · wiki: page title
  label         text,                   -- book: "Chapter 6" · wiki: NULL
  heading       text,                   -- section heading
  url           text NOT NULL,
  ord           int  NOT NULL DEFAULT 0,
  text          text NOT NULL,
  content_hash  text NOT NULL,
  tsv           tsvector GENERATED ALWAYS AS (
                  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(heading, '') || ' ' || text)) STORED,
  embedding     vector(1024),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS rag_chunks_embedding_idx ON rag_chunks USING hnsw (embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS rag_chunks_tsv_idx       ON rag_chunks USING gin (tsv);
CREATE INDEX IF NOT EXISTS rag_chunks_source_doc_idx ON rag_chunks (source, doc_key);
