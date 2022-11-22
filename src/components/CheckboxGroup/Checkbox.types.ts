export interface Props {
  itemList: string[];
  values?: string[];
  onSelect?: (values: string[]) => void;
}

export type CheckboxProps = Props;
