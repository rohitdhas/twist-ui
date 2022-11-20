export interface Props {
  itemList: string[];
  value?: string;
  defaultText?: string;
  onSelect?: (value: string) => void;
}

export type DropDownProps = Props;
