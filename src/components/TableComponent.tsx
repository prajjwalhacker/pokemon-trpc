// components/TableComponent.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableRowComponent from './TableRow';

interface TableComponentProps {
  rows: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
}

const TableComponent: React.FC<TableComponentProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Names</TableCell>
            <TableCell>Types</TableCell>
            <TableCell>Sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRowComponent key={index} data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
