export type MicroCMSObject = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type MicroCMSList<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
