import React from "react";
import { SearchBar } from "../../shared/components";
import { RegisterButton } from "../../shared/components/RegisterButton";
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../reducer";

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
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const onSearch = () => {};

  if (loading === "pending") return <div>...로딩중</div>;
  return (
    <>
      <SearchBar onFinish={onSearch} />
      <Table
        dataSource={entities}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => history.push(`/car/detail/${record.id}`),
          };
        }}
        scroll={{ x: 500 }}
      />
      <RegisterButton link="/car/register" label="차량등록" />
    </>
  );
};
