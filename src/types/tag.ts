import { MicroCMSObject } from 'types/microCMS';

export type Tag = MicroCMSObject & {
  createdAt: string;
  id: string;
  nameEn: string;
  nameJa: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};
