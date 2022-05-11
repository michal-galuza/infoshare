import { useMemo } from 'react';
import { IProduct } from '../../../core/product';
export const useListForm = () => {
  const initialProduct = useMemo<IProduct>(
    (): IProduct => ({
      count: 1,
      description: '',
      image: '',
      location: '',
      name: '',
      producer: '',
      unit: 'szt.',
    }),
    []
  );
  return { initialProduct };
};
