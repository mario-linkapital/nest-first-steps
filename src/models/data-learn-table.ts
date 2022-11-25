export interface DataLearnTable {
  class?: string;
  paginator?: boolean;
  topHeader?: Array<TableLearn>;
  headers: Array<TableLearn>;
  rows: Array<any>;
}

export interface TableLearn {
  field: any;
  header: string;
  colSpan?: number;
  rowSpan?: number;
  width?: number;
  class?: string;
  style?: string;
  pipe?: string;
  mix?: boolean;
  left?: string;
  extraVal?: string;
}
