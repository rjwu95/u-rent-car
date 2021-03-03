import { Button, Form, Input, InputNumber } from "antd";
import { useState } from "react";
import { FormBlock, SubmitButton } from "../components";

interface CustomerFormProps {
  onFinish(value: any): void;
  submitLabel?: string;
}

export const CustomerForm = ({
  onFinish,
  submitLabel = "등록",
}: CustomerFormProps) => {
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  const onClickPostSearch = () => {
    const daum = (window as any).daum;
    new daum.Postcode({
      oncomplete: (data: any) => {
        const { roadAddress, zonecode } = data;
        console.log(
          "🚀 ~ file: CustomerRegister.tsx ~ line 16 ~ onClickPostSearch ~ roadAddress",
          roadAddress
        );
        setAddress(roadAddress);
        setPostcode(zonecode);
      },
    }).open();
  };
  return (
    <FormBlock onFinish={onFinish}>
      <>
        <Form.Item
          name="name"
          label="성명"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nationId"
          label="주민등록번호"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Form.Item name={["nationId", "birthday"]}>
            <InputNumber placeholder="앞자리" />
          </Form.Item>
          <Form.Item name={["nationId", "backId"]}>
            <InputNumber placeholder="뒷자리" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="hp"
          label="휴대폰"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Form.Item name={["hp", "first"]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name={["hp", "middle"]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name={["hp", "last"]}>
            <InputNumber />
          </Form.Item>
        </Form.Item>
        <Form.Item label="우편번호" name="postId">
          <Input readOnly onClick={onClickPostSearch} value={postcode} />
          <Button onClick={onClickPostSearch}>조회</Button>
        </Form.Item>
        <Form.Item label="주소" name="address">
          <Input readOnly onClick={onClickPostSearch} value={address} />
          <div /> {/* 값 렌더링 안되는 버그 */}
        </Form.Item>
        <Form.Item label="상세주소" name="detailAddress">
          <Input />
        </Form.Item>
        <SubmitButton label={submitLabel} />
      </>
    </FormBlock>
  );
};
