import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { SearchBar } from "../components";
import { RegisterButton } from "../components/RegisterButton";
import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { fetchContracts } from "../reducers/contract";

function convertToKoDate(string) {
  return new Date(string).toLocaleString("ko");
}

const columns = [
  {
    title: "등록일",
    dataIndex: "createdAt",
    key: "createdAt",
    render: function (text, row, index) {
      return convertToKoDate(row.createdAt);
    },
  },
  {
    title: "차량번호",
    dataIndex: "number",
    key: "number",
    render: function (text, row, index) {
      return row.car.number;
    },
  },
  {
    title: "차량명",
    dataIndex: "name",
    key: "name",
    render: function (text, row, index) {
      return row.car.name;
    },
  },
  {
    title: "임차인",
    dataIndex: "renterName",
    key: "renterName",
    render: function (text, row, index) {
      return row.renter.name;
    },
  },
  {
    title: "생년월일",
    dataIndex: "renterBirthday",
    key: "renterBirthday",
    render: function (text, row, index) {
      return row.renter.birthday;
    },
  },
  {
    title: "연락처",
    dataIndex: "renterHp",
    key: "renterHp",
    render: function (text, row, index) {
      return row.renter.hp;
    },
  },
  {
    title: "대여일시",
    dataIndex: "departure",
    key: "departure",
    render: function (text, row, index) {
      return convertToKoDate(row.departure);
    },
  },
  {
    title: "반납(예정)일시",
    dataIndex: "arrive",
    key: "arrive",
    render: function (text, row, index) {
      return convertToKoDate(row.arrive);
    },
  },
  {
    title: "출고자",
    dataIndex: "outerName",
    key: "outerName",
    render: function (text, row, index) {
      return row.outer.name;
    },
  },
];

export const Contract = ({ history }) => {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.contract);

  useEffect(() => {
    dispatch(fetchContracts());
  }, []);

  const onSearch = () => {};

  if (loading === "pending") return <div>...loading</div>;
  return (
    <>
      <SearchBar onFinish={onSearch} />
      <Table
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
