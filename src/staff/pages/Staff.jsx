import React from "react";
import { Button, Table } from "antd";
import { SearchBar, RegisterButton } from "../../shared/components";
import { TableBlock } from "../../shared/components/TableBlock";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStaffs } from "../reducer";

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

export const Staff = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.staff);

  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch]);

  const onSearch = () => {};
  const onDelete = (a) => {};
  if (loading === "pending") return <div>...로딩중</div>;
  return (
    <>
      <SearchBar onFinish={onSearch} />
      <TableBlock dataSource={entities}>
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
