interface TabItem {
  label: string;
  key: string;
  children: any;
}

export interface Props {
  items: TabItem[];
  defaultSelected?: string;
  onChange?: (key: string) => void;
}

export interface TabContentProps {
  isSelected: boolean;
  children: any;
}

export type TabTypes = Props;
export type TabContentTypes = TabContentProps;
