-- Ask the Book: one row per answered reader question (raw signal feed; no IP, no identity).
-- Applied to the TARS Neon database (NEON_DATABASE_URL) on 2026-10-15.
CREATE TABLE IF NOT EXISTS book_questions (
  id            bigserial PRIMARY KEY,
  asked_at      timestamptz NOT NULL DEFAULT now(),
  source        text        NOT NULL DEFAULT 'ask-the-book',
  book          text        NOT NULL DEFAULT 'adaptive',
  question      text        NOT NULL,
  chapter       text,                       -- slug the reader was on, if any
  history_turns smallint    NOT NULL DEFAULT 0,
  answer        text,
  citations     jsonb       NOT NULL DEFAULT '[]'::jsonb,  -- [{slug, anchor, heading, url}]
  stop_reason   text,
  model         text,
  input_tokens  integer,
  cache_read    integer,
  cache_write   integer,
  output_tokens integer,
  cold          boolean,
  latency_ms    integer,
  streamed      boolean
);
CREATE INDEX IF NOT EXISTS book_questions_asked_at_idx ON book_questions (asked_at DESC);
CREATE INDEX IF NOT EXISTS book_questions_chapter_idx  ON book_questions (chapter);
