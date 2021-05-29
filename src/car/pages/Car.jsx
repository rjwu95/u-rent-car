import React from "react";
import { SearchBar } from "../../shared/components";
import { RegisterButton } from "../../shared/components/RegisterButton";
import { Table } from "antd";

const columns = [
  {
    title: "차량번호",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "차종",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "차량등급",
    dataIndex: "grade",
    key: "grade",
  },
  {
    title: "연료타입",
    dataIndex: "fuel",
    key: "fuel",
  },
  {
    title: "변속방식",
    dataIndex: "gear",
    key: "gear",
  },
  {
    title: "운행 km",
    dataIndex: "distance",
    key: "distance",
  },
  {
    title: "잔여연료량",
    dataIndex: "remainFuel",
    key: "remainFuel",
  },
  {
    title: "대여여부",
    dataIndex: "status",
    key: "status",
  },
];

export const Car = ({ history }) => {
  const dataSource = [
    {
      key: 1,
      number: "24하2522",
      name: "그랜저",
      grade: "국산차",
      fuel: "가솔린",
      gear: "오토",
      distance: "200",
      remainFuel: "20",
      status: "대여중",
    },
    {
      key: 2,
      number: "24하2522",
      name: "그랜저",
      grade: "국산차",
      fuel: "가솔린",
      gear: "오토",
      distance: "200",
      remainFuel: "20",
      status: "대여중",
    },
    {
      key: 3,
      number: "24하2522",
      name: "그랜저",
      grade: "국산차",
      fuel: "가솔린",
      gear: "오토",
      distance: "200",
      remainFuel: "20",
      status: "대여중",
    },
  ];

  const onSearch = () => {};

  return (
    <>
      <SearchBar onFinish={onSearch} />
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => history.push(`/car/detail/${record.key}`),
          };
        }}
      />
      <RegisterButton link="/car/register" label="차량등록" />
    </>
  );
};
