import { MicroCMSObject } from 'types/microCMS';

export type News = MicroCMSObject & {
  title: string;
  important: boolean;
  category: string[];
  notificationDate: Date;
  body: string;
};
