import { Button, Form, Input, InputNumber } from "antd";
import { FormBlock, SubmitButton } from "../components";

export const CustomerRegister = () => {
  const onFinish = (a: any) => {
    console.log(a);
  };
  const onClickPostSearch = () => {
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
          <Input disabled />
          <Button onClick={onClickPostSearch}>조회</Button>
        </Form.Item>
        <SubmitButton />
      </>
    </FormBlock>
  );
};
