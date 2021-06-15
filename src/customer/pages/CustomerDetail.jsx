import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomerForm } from "../components/CustomerForm";
import * as customerAPI from "../api";

export const CustomerDetail = ({ history }) => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    customerAPI.getCustomer(id).then(({ data }) => setInfo(data));
  }, [id]);
  const onFinish = useCallback(
    (newInfo) => {
      customerAPI
        .updateCustomer({ ...info, ...newInfo })
        .then(() => {
          alert("수정했습니다");
          history.goBack();
        })
        .catch(() => alert("저장을 실패했습니다"));
    },
    [info, history]
  );

  if (!info) return <div>로딩중</div>;
  return <CustomerForm onFinish={onFinish} submitLabel="저장" info={info} />;
};
