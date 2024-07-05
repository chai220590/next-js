"use client";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SysTable({
  data,
  header,
  onChangePage,
  totalPage,
  page = 1,
}) {
  const renderPagination = useMemo(() => {
    return (
      <div className="flex w-full justify-center">
        <Pagination
          showControls
          showShadow
          color="secondary"
          page={page}
          total={totalPage}
          onChange={onChangePage}
        />
      </div>
    );
  }, [page, totalPage, onChangePage]);

  return (
    <Table
      aria-label={`${uuidv4()}`}
      isStriped
      bottomContent={renderPagination}
    >
      <TableHeader>
        {header.map((x, index) => {
          return (
            <TableColumn className={`${x?.className}`} key={`${x?.key}`}>
              {x?.name}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody items={data}>
        {(item, index) => {
          return (
            <TableRow key={`${uuidv4()}-${index}`}>
              {(columnKey) => {
                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
