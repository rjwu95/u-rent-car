import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { SearchBar } from "../components";
import { RegisterButton } from "../components/RegisterButton";
import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { fetchContracts } from "../reducers/contract";

const columns = [
  {
    title: "등록일",
    dataIndex: "createdAt",
    key: "createdAt",
    render: function (text: any, row: any, index: any) {
      return new Date(row.createdAt).toLocaleString("ko");
    },
  },
  {
    title: "차량번호",
    dataIndex: "car.number",
    key: "car.number",
    render: function (text: any, row: any, index: any) {
      return row.car.number;
    },
  },
  {
    title: "차량명",
    dataIndex: "car.name",
    key: "car.name",
    render: function (text: any, row: any, index: any) {
      return row.car.name;
    },
  },
  {
    title: "임차인",
    dataIndex: "renter.name",
    key: "renter.name",
    render: function (text: any, row: any, index: any) {
      return row.renter.name;
    },
  },
  {
    title: "생년월일",
    dataIndex: "renter.birthday",
    key: "renter.birthday",
    render: function (text: any, row: any, index: any) {
      return row.renter.birthday;
    },
  },
  {
    title: "연락처",
    dataIndex: "renter.hp",
    key: "renter.hp",
    render: function (text: any, row: any, index: any) {
      return row.renter.hp;
    },
  },
  {
    title: "대여일시",
    dataIndex: "departure",
    key: "departure",
    render: function (text: any, row: any, index: any) {
      return new Date(row.departure).toLocaleString("ko");
    },
  },
  {
    title: "반납(예정)일시",
    dataIndex: "arrive",
    key: "arrive",
    render: function (text: any, row: any, index: any) {
      return new Date(row.arrive).toLocaleString("ko");
    },
  },
  {
    title: "출고자",
    dataIndex: "outer.name",
    key: "outer.name",
    render: function (text: any, row: any, index: any) {
      return row.outer.name;
    },
  },
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
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.contract);

  useEffect(() => {
    dispatch(fetchContracts() as any);
  }, []);

  const onSearch = () => {};

  if (loading === "pending") return <div>...loading</div>;
  return (
    <>
      <SearchBar onFinish={onSearch} />
      <Table<any>
        dataSource={entities}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => history.push(`/contract/detail/${record.id}`),
          };
        }}
      />
      <RegisterButton link="/contract/register" label="계약서등록" />
    </>
  );
};
