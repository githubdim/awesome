import React from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/react";

interface ProductSpecsProps {
  specifications: Record<string, string>;
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <Table aria-label="Характеристики продукта" removeWrapper>
      <TableHeader>
        <TableColumn>ХАРАКТЕРИСТИКА</TableColumn>
        <TableColumn>ЗНАЧЕНИЕ</TableColumn>
      </TableHeader>
      <TableBody>
        {Object.entries(specifications).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{key}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}