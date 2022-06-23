import { Category } from 'types/blog';

const categoryCorrespondenceTable: { [K in Category]: string } = {
  column: 'コラム',
  engineer: 'エンジニア',
  design: 'デザイン',
};

export default categoryCorrespondenceTable;
