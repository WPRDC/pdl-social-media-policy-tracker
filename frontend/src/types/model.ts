export interface Timeline {
  [date: string]: TrackerRecord[];
}

export interface Citation {
  id: string;
  url: string;
}

export interface Category {
  slug: string;
  name: string;
  color: string;
}

export interface Firm {
  slug: string;
  name: string;
  homepage: string;
}

export interface Platform {
  slug: string;
  name: string;
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
