import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { SearchBar } from "../components";
import { RegisterButton } from "../components/RegisterButton";
import { TableBlock } from "../utils/table";

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

type CarData = {
  key: number;
  number: string;
  name: string;
  grade: string;
  fuel: string;
  gear: string;
  distance: string;
  remainFuel: string;
  status: string;
};

export const Car: React.FC<RouteComponentProps> = ({ history }) => {
  const dataSource: CarData[] = [
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
      <TableBlock
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => history.push(`/car/detail/1`),
          };
        }}
      />
      <RegisterButton link="/car/register" label="차량등록" />
    </>
  );
};
