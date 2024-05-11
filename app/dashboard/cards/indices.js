"use client";
import { Card, CardBody, getKeyValue } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React from "react";

const Indices = () => {
  const rows = [
    {
      key: "1",
      icon: "NSE",
      indices: "NIFTY50",
      price: "22100",
      change: "-0.2",
    },
    {
      key: "2",
      icon: "NSE",
      indices: "BANKNIFTY",
      price: "43100",
      change: "-0.2",
    },
    {
      key: "1",
      icon: "NSE",
      indices: "FINNIFTY",
      price: "22100",
      change: "-0.2",
    },
    {
      key: "1",
      icon: "NSE",
      indices: "MIDCPNIFTY",
      price: "22100",
      change: "-0.2",
    },
  ];
  const columns = [
    {
      key: "icon",
      label: "ICON",
    },
    {
      key: "indices",
      label: "SYMBOL",
    },
    {
      key: "price",
      label: "PRICE",
    },
    {
      key: "change",
      label: "CHANGE",
    },
  ];
  return (
    <Card fullWidth={true} className="h-full">
      <CardBody className=" h-full ">
        {" "}
        <Table
          className="h-full"
          hideHeader="true"
          shadow="none"
          isStriped="true"
          aria-label="Example table with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody className="h-full" items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Indices;
