DROP TABLE IF EXISTS newsletter_items;

CREATE TABLE IF NOT EXISTS newsletter_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  link TEXT NOT NULL UNIQUE,
  description TEXT,
  content TEXT,
  type TEXT DEFAULT 'newsletter',
  pub_date TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_newsletter_pub_date ON newsletter_items(pub_date DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_link ON newsletter_items(link);
