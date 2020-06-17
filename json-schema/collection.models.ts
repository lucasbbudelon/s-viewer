export interface Collection {
  id: string;
  name: string;
  description: string;
  owner: string;
  tags: CollectionTag[];
  services: CollectionService[];
  doc?: string;
}

export interface CollectionService {
  id: string;
  version: string;
}

export enum CollectionTag {
  Web = "WEB",
  Mobile = "MOBILE",
  Migration = "MIGRATION",
  Frontend = "FRONTEND",
  Backend = "BACKEND"
}