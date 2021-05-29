import React from "react";
import { Button, Table } from "antd";
import { SearchBar, RegisterButton } from "../../shared/components";
import { TableBlock } from "../../shared/components/TableBlock";

const { Column } = Table;

const DELETE_KEY = "delete";

const columns = [
  {
    title: "이름",
    dataIndex: "name",
  },
  {
    title: "아이디",
    dataIndex: "loginId",
  },
  {
    title: "관리",
    dataIndex: DELETE_KEY,
  },
];

const dataSource = [
  {
    key: 1,
    name: "유건",
    loginId: "yugun",
  },
];
export const Staff = () => {
  const onSearch = () => {};
  const onDelete = (a) => {};

  return (
    <>
      <SearchBar onFinish={onSearch} />
      <TableBlock dataSource={dataSource}>
        {columns.map((el) => (
          <Column
            title={el.title}
            dataIndex={el.dataIndex}
            key={el.dataIndex}
            {...(el.dataIndex === DELETE_KEY && {
              render: (col, data) => (
                <Button onClick={() => onDelete(data.loginId)}>삭제</Button>
              ),
            })}
          />
        ))}
      </TableBlock>
      <RegisterButton label="직원등록" link="/staff/register" />
    </>
  );
};
