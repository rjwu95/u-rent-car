import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { SearchBar } from "../components";
import { RegisterButton } from "../components/RegisterButton";
import { Table } from "antd";

const columns = [
  {
    title: "등록일",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "차량번호",
    dataIndex: "carNumber",
    key: "carNumber",
  },
  {
    title: "차량명",
    dataIndex: "carName",
    key: "carName",
  },
  {
    title: "임차인",
    dataIndex: "renter",
    key: "renter",
  },
  {
    title: "생년월일",
    dataIndex: "renderBirthday",
    key: "renderBirthday",
  },
  {
    title: "연락처",
    dataIndex: "ph",
    key: "ph",
  },
  {
    title: "대여일시",
    dataIndex: "rentDate",
    key: "rentDate",
  },
  {
    title: "반납(예정)일시",
    dataIndex: "comeBackDate",
    key: "comeBackDate",
  },
  { title: "출고자", dataIndex: "staff", key: "staff" },
];

type ContractData = {
  key: number;
  date: string;
  carNumber: string;
  carName: string;
  renter: string;
  renderBirthday: string;
  ph: string;
  rentDate: string;
  comeBackDate: string;
  staff: string;
};

export const Contract: React.FC<RouteComponentProps> = ({ history }) => {
  const dataSource: ContractData[] = [
    {
      key: 1,
      date: "a",
      carNumber: "a",
      carName: "a",
      renter: "a",
      renderBirthday: "a",
      ph: "a",
      rentDate: "a",
      comeBackDate: "a",
      staff: "a",
    },
  ];

  const onSearch = () => {};

  return (
    <>
      <SearchBar onFinish={onSearch} />
      <Table<typeof dataSource[0]>
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => history.push(`/contract/detail/${record.key}`),
          };
        }}
      />
      <RegisterButton link="/contract/register" label="계약서등록" />
    </>
  );
};
