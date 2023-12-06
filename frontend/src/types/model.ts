export interface Timeline {
  [date: string]: TrackerRecord[];
}

export interface Named {
  slug: string;
  name: string;
}

export interface Citation {
  id: string;
  url: string;
}

export interface Category extends Named {
  color: string;
}

export interface Firm extends Named {
  homepage: string;
}

export interface Platform extends Named {
  homepage: string;
  firm: Firm;
  backgroundColor: string;
  textColor: string;
}

export interface TrackerRecord {
  id: string;
  summary: string;
  details: string;
  date: string;
  category: Category;
  platform: Platform;
  citations: string[];
}
