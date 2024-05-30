// components/TableRowComponent.tsx
import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import Image from 'next/image';

interface TableRowComponentProps {
  data: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
}

const TableRowComponent: React.FC<TableRowComponentProps> = ({ data }) => {

  return (
    <TableRow>
      <TableCell>{data.id}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.types.join(', ')}</TableCell>
      <TableCell>
        <Image src={data.sprite}  alt='' width={40} height={40} /> 
        </TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
