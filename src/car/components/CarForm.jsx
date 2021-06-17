import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import {
  SubmitButton,
  FormBlock,
  FormDatePicker,
} from "../../shared/components";

const { Option, OptGroup } = Select;

const STATUS_OPTIONS = [
  "미운행",
  "정상운행",
  "수리중",
  "검사중",
  "폐차",
  "매각",
  "직원운행",
];
const GRADE_OPTIONS = [
  "대형차",
  "화물",
  "소형SUV",
  "대형SUV",
  "준대형",
  "경차",
  "수입차",
  "승합차",
  "준중형",
  "중형",
  "RV",
  "중형SUV",
];
const GEAR_OPTIONS = ["수동", "오토"];
const FUEL_OPTIONS = ["휘발유", "경유", "LPG", "전기"];

export function CarForm({ onFinish, info = {} }) {
  return (
    <FormBlock onFinish={onFinish} initialValues={info}>
      <>
        <Form.Item name="number" label="차량번호" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item name="status" label="운행상태" rules={[{ required: true }]}>
          <Select>
            <OptGroup label="운행상태">
              {STATUS_OPTIONS.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name="name" label="차량명" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item name="grade" label="차량등급" rules={[{ required: true }]}>
          <Select>
            <OptGroup label="차량등급">
              {GRADE_OPTIONS.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name="gear" label="변속방식" rules={[{ required: true }]}>
          <Select>
            <OptGroup label="변속방식">
              {GEAR_OPTIONS.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name="fuel" label="사용연료" rules={[{ required: true }]}>
          <Select>
            <OptGroup label="사용연료">
              {FUEL_OPTIONS.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item
          name="distance"
          label="주행거리"
          rules={[{ required: true }]}
        >
          <InputNumber placeholder="km" />
        </Form.Item>
        <Form.Item
          name="remainFuel"
          label="잔여연료량"
          rules={[{ required: true }]}
        >
          <InputNumber placeholder="%" />
        </Form.Item>
        <Form.Item name="birth" label="차량연식" rules={[{ required: true }]}>
          <FormDatePicker picker="month" />
        </Form.Item>
        <Form.Item name="remark" label="메모">
          <Input.TextArea allowClear />
        </Form.Item>
        <SubmitButton label={info.id ? "저장" : "등록"} />
      </>
    </FormBlock>
  );
}
