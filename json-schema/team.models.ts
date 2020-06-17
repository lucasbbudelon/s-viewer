export interface Team {
  id: string;
  name: string;
  description: string;
  members: Member[];
  services: string[];
  doc?: string;
}

export interface Member {
  name: string;
  chapter: TeamChapter;
}

export enum TeamChapter {
  Backend = "BACKEND",
  Web = "WEB",
  Android = "ANDROID",
  IOS = "IOS",
  QA = "QA",
  PO = "PO",
  Agilista = "AGILISTA",
  TeamLeader = "TL"
}

