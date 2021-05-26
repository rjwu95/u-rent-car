import React, { useMemo, useState } from "react";
import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import { SubmitButton, FormBlock } from ".";
import moment from "moment";
const { Option, OptGroup } = Select;

const statusOptions = [
  "미운행",
  "정상운행",
  "수리중",
  "검사중",
  "폐차",
  "매각",
  "직원운행",
];
const gradeOptions = [
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
const gearOptions = ["수동", "오토"];
const fuelOptions = ["휘발유", "경유", "LPG", "전기"];

export function CarForm({ onFinish, submitLabel = "등록", info }) {
  return (
    <FormBlock
      onFinish={onFinish}
      initialValues={{ ...info, birth: moment(info.birth) }}
    >
      <>
        <Form.Item name="number" label="차량번호" rules={[{ required: true }]}>
          <Input allowClear disabled={!!info} />
        </Form.Item>
        <Form.Item name="status" label="운행상태" rules={[{ required: true }]}>
          <Select>
            <OptGroup label="운행상태">
              {statusOptions.map((el) => (
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
          <Select disabled={!!info}>
            <OptGroup label="차량등급">
              {gradeOptions.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name="gear" label="변속방식" rules={[{ required: true }]}>
          <Select disabled={!!info}>
            <OptGroup label="변속방식">
              {gearOptions.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name="fuel" label="사용연료" rules={[{ required: true }]}>
          <Select disabled={!!info}>
            <OptGroup label="사용연료">
              {fuelOptions.map((el) => (
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
          <DatePicker picker="month" />
        </Form.Item>
        <Form.Item name="remark" label="메모">
          <Input.TextArea allowClear />
        </Form.Item>
        <SubmitButton label={submitLabel} />
      </>
    </FormBlock>
  );
}
