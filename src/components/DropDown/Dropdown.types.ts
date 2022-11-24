export interface Props {
  itemList: string[];
  value?: string;
  defaultText?: string;
  label?: string;
  onSelect?: (value: string) => void;
}

export type DropDownProps = Props;
