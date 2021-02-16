import { Form, Input } from "antd";
import { FormBlock, SubmitButton } from "../components";

export const StaffRegister = () => {
  const onFinish = (a: any) => {
    console.log(a);
  };

  return (
    <FormBlock onFinish={onFinish}>
      <>
        <Form.Item
          name="name"
          label="이름"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="loginId"
          label="아이디"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject("비밀번호가 일치하지 않습니다");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <SubmitButton />
      </>
    </FormBlock>
  );
};
