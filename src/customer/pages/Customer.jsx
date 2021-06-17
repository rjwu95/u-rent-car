import React from "react";
import { Table } from "antd";
import { SearchBar, RegisterButton } from "../../shared/components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCustomers } from "../reducer";

const columns = [
  {
    title: "고객명",
    dataIndex: "name",
  },
  {
    title: "생년월일",
    dataIndex: "birth",
  },
  {
    title: "휴대폰",
    dataIndex: "hp",
  },
  {
    title: "주소",
    dataIndex: "address",
  },
];

export const Customer = ({ history }) => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.customer);

  const onSearch = () => {};

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  if (loading === "pending") return <div>...loading</div>;
  return (
    <>
      <SearchBar onFinish={onSearch} />
      <Table
        dataSource={entities}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => history.push(`/customer/detail/${record.id}`),
          };
        }}
      />
      <RegisterButton label="고객등록" link="/customer/register" />
    </>
  );
};
