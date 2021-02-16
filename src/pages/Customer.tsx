import React from "react";
import { SearchBar, RegisterButton } from "../components";
import { TableBlock } from "../utils/table";

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

const dataSource = [
  {
    key: 1,
    name: "유건",
    birth: "950714-1212121",
    hp: "010-5154-9028",
    address: "서울시 땡땡구 땡땡로 12-12",
  },
];
export const Customer = () => {
  const onSearch = () => {};

  return (
    <>
      <SearchBar onFinish={onSearch} />
      <TableBlock dataSource={dataSource} columns={columns} />
      <RegisterButton label="고객등록" link="/customer/register" />
    </>
  );
};
