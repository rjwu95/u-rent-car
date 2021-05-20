import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { SubmitButton, FormBlock } from ".";
import usePostcode from "../hooks/usePostcode";
const { Option, OptGroup } = Select;
const { Title } = Typography;

const lisenceTypeOptions = [
  "1종보통",
  "1종대형",
  "2종보통",
  "2종소형",
  "1종특수",
  "1종장애인",
  "2종장애인",
];

export function ContractForm({
  onFinish,
  submitLabel = "등록",
  initNumber,
  info = null,
}) {
  const { address, postcode, onClickPostSearch } = usePostcode();
  return (
    <FormBlock onFinish={onFinish}>
      <>
        <div className="formBlock">
          <Title level={5}>기본정보</Title>
          <Form.Item
            name="staff"
            value={info?.outerId}
            label="출고자"
            rules={[{ required: true }]}
          >
            <Select>
              <OptGroup label="출고자">{[].map((el) => {})}</OptGroup>
            </Select>
            <div />
          </Form.Item>
          <Form.Item
            name="status"
            label="대여현황"
            rules={[{ required: true }]}
          >
            <Select>
              <OptGroup label="대여현황">{[].map((el) => {})}</OptGroup>
            </Select>
            <div />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>임차인정보</Title>
          <Form.Item
            name="renterName"
            label="성명"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="renterBirthday"
            label="생년월일"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="renterHp"
            label="휴대폰"
            rules={[{ required: true }]}
          >
            <Input />
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
          <Form.Item label="면허번호" name="lisenceNumber">
            <Input />
          </Form.Item>
          <Form.Item label="면허구분" name="lisenceType">
            <Select>
              <OptGroup label="출고자">
                {lisenceTypeOptions.map((el) => (
                  <Option key={el} value={el}>
                    {el}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Form.Item>
          <Form.Item label="유효기간" name="lisenceExpiry">
            <Input />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>운전자정보</Title>
          <Form.Item
            name="renterName"
            label="성명"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="renterBirthday"
            label="생년월일"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="renterHp"
            label="휴대폰"
            rules={[{ required: true }]}
          >
            <Input />
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
          <Form.Item label="면허번호" name="lisenceNumber">
            <Input />
          </Form.Item>
          <Form.Item label="면허구분" name="lisenceType">
            <Select>
              <OptGroup label="출고자">
                {lisenceTypeOptions.map((el) => (
                  <Option key={el} value={el}>
                    {el}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Form.Item>
          <Form.Item label="유효기간" name="lisenceExpiry">
            <Input />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>계약정보</Title>
          <Form.Item
            name="startDate"
            label="출발일시"
            rules={[{ required: true }]}
          >
            <DatePicker showTime></DatePicker>
          </Form.Item>
          <Form.Item
            name="arriveDate"
            label="도착예정"
            rules={[{ required: true }]}
          >
            <DatePicker showTime></DatePicker>
          </Form.Item>
          <Form.Item
            name="useTime"
            label="사용기간"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="배차장소"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>차량정보</Title>
          <Form.Item
            name="carNumber"
            label="차량번호"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="carName" label="차종" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="initKm" label="출발" rules={[{ required: true }]}>
            <Input />
            <Input />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>대여요금</Title>
          <Form.Item name="fee" label="적용요금" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <SubmitButton label={submitLabel} />
      </>
    </FormBlock>
  );
}
