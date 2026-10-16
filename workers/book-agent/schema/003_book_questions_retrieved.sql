-- Which passages the retriever handed the model for each answer (cite keys, in rank order).
ALTER TABLE book_questions ADD COLUMN IF NOT EXISTS retrieved jsonb;
