import React from "react";
import { Button, DatePicker, Form, Input } from "antd";
import { FormBlock, SubmitButton } from "../../shared/components";
import usePostcode from "../../shared/hooks/usePostcode";
import moment from "moment";

export const CustomerForm = ({ onFinish, submitLabel = "등록", info = {} }) => {
  const { address, postcode, onClickPostSearch } = usePostcode();
  return (
    <FormBlock
      onFinish={onFinish}
      initialValues={{ ...info, licenseDate: moment(info.licenseDate) }}
    >
      <>
        <Form.Item name="name" label="성명" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="생년월일"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="hp" label="휴대폰" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="우편번호" name="postcode">
          <Input readOnly onClick={onClickPostSearch} value={postcode} />
          <Button onClick={onClickPostSearch}>조회</Button>
        </Form.Item>
        <Form.Item label="주소" name="address">
          <Input readOnly onClick={onClickPostSearch} value={address} />
        </Form.Item>
        <Form.Item label="상세주소" name="detailAddress">
          <Input />
        </Form.Item>
        <Form.Item label="면허번호" name="license">
          <Input />
        </Form.Item>
        <Form.Item label="면허구분" name="licenseType">
          <Input />
        </Form.Item>
        <Form.Item label="유효기간" name="licenseDate">
          <DatePicker />
        </Form.Item>
        <SubmitButton label={info.id ? "저장" : "등록"} />
      </>
    </FormBlock>
  );
};
