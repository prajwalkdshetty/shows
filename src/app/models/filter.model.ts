import { Filter } from './filter.model';
export interface FilterType {
  type: string;
  name: string;
}
export interface Filter {
    name: string;
    types: FilterType[];
}

