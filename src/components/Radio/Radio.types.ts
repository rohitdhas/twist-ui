export interface Props {
  itemList: string[];
  value?: string;
  onSelect?: (value: string) => void;
}

export type RadioProps = Props;
