interface TableColumn {
  title: string;
  key: string;
  dataIndex: string;
}

export interface Props {
  columns: TableColumn[];
  dataSource: Object[];
}

export type TableTypes = Props;
