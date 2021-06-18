import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Typography,
  Checkbox,
  InputNumber,
} from "antd";
import {
  SubmitButton,
  FormBlock,
  FormDatePicker,
} from "../../shared/components";
import usePostcode from "../../shared/hooks/usePostcode";
import { LISENCE_TYPE, RENT_STATUS } from "../../shared/constant";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchStaffs } from "../../staff/reducer";

const { Option, OptGroup } = Select;
const { Title } = Typography;

function FormItemInput({ value, onClick, variable, onChange }) {
  useEffect(() => {
    if (onChange && variable) onChange(variable);
  }, [onChange, variable]);
  return <Input readOnly onClick={onClick} value={value || variable} />;
}

const RightButton = styled(Button)`
  float: right;
`;

export function ContractForm({ onFinish, info = {} }) {
  const [renterAddress, renterPostcode, onSearchRenterPost] = usePostcode();
  const [driverAddress, driverPostcode, onSearchDriverPost] = usePostcode();
  const { entities: staffs, loading } = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch]);

  const useTime = useMemo(() => {
    return (
      (new Date(info.arrive).getTime() - new Date(info.departure).getTime()) /
        (1000 * 60 * 60) +
      "시간"
    );
  }, [info]);
  const [isSame, setIsSame] = useState(false);

  if (loading === "pending") return <div>...로딩중</div>;
  return (
    <FormBlock
      onFinish={onFinish}
      initialValues={{
        ...info,
      }}
    >
      <div className="formBlock">
        <Title level={5}>기본정보</Title>
        <Form.Item name="outerId" label="출고자">
          <Select>
            <OptGroup label="출고자">
              {staffs.map((el) => (
                <Option key={el.id} value={el.id}>
                  {el.name}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name={["car", "status"]} label="대여현황">
          <Select>
            <OptGroup label="대여현황">
              {RENT_STATUS.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
      </div>
      <div className="formBlock">
        <Title level={5}>임차인정보</Title>
        <Form.Item name={["renter", "name"]} label="성명">
          <Input />
        </Form.Item>
        <Form.Item name={["renter", "birthday"]} label="생년월일">
          <Input />
        </Form.Item>
        <Form.Item name={["renter", "hp"]} label="휴대폰">
          <Input />
        </Form.Item>
        <RightButton style={{ float: "right" }} onClick={onSearchRenterPost}>
          조회
        </RightButton>
        <Form.Item label="우편번호" name={["renter", "postcode"]}>
          <FormItemInput
            onClick={onSearchRenterPost}
            variable={renterPostcode}
          />
        </Form.Item>
        <Form.Item label="주소" name={["renter", "address"]}>
          <FormItemInput
            onClick={onSearchRenterPost}
            variable={renterAddress}
          />
        </Form.Item>
        <Form.Item label="상세주소" name={["renter", "detailAddress"]}>
          <Input />
        </Form.Item>
        <Form.Item label="면허번호" name={["renter", "license"]}>
          <Input />
        </Form.Item>
        <Form.Item label="면허구분" name={["renter", "licenseType"]}>
          <Select>
            <OptGroup label="출고자">
              {LISENCE_TYPE.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item label="유효기간" name={["renter", "licenseDate"]}>
          <FormDatePicker />
        </Form.Item>
      </div>
      <div className="formBlock">
        <Title level={5}>운전자정보</Title>
        <Checkbox
          checked={isSame}
          onChange={(e) => setIsSame(e.target.checked)}
        >
          임차인 정보와 동일
        </Checkbox>
        {!isSame && (
          <>
            <Form.Item name={["driver", "name"]} label="성명">
              <Input />
            </Form.Item>
            <Form.Item name={["driver", "birthday"]} label="생년월일">
              <Input />
            </Form.Item>
            <Form.Item name={["driver", "hp"]} label="휴대폰">
              <Input />
            </Form.Item>
            <RightButton
              style={{ float: "right" }}
              onClick={onSearchDriverPost}
            >
              조회
            </RightButton>
            <Form.Item label="우편번호" name={["driver", "postcode"]}>
              <FormItemInput
                onClick={onSearchDriverPost}
                variable={driverPostcode}
              />
            </Form.Item>
            <Form.Item label="주소" name={["driver", "address"]}>
              <FormItemInput
                onClick={onSearchDriverPost}
                variable={driverAddress}
              />
            </Form.Item>
            <Form.Item label="상세주소" name={["driver", "detailAddress"]}>
              <Input />
            </Form.Item>
            <Form.Item label="면허번호" name={["driver", "license"]}>
              <Input />
            </Form.Item>
            <Form.Item label="면허구분" name={["driver", "licenseType"]}>
              <Select>
                <OptGroup label="면허구분">
                  {LISENCE_TYPE.map((el) => (
                    <Option key={el} value={el}>
                      {el}
                    </Option>
                  ))}
                </OptGroup>
              </Select>
            </Form.Item>
            <Form.Item label="유효기간" name={["driver", "licenseDate"]}>
              <FormDatePicker />
            </Form.Item>
          </>
        )}
      </div>
      <div className="formBlock">
        <Title level={5}>계약정보</Title>
        <Form.Item name="departure" label="출발일시">
          <FormDatePicker showTime />
        </Form.Item>
        <Form.Item name="arrive" label="도착예정">
          <FormDatePicker showTime />
        </Form.Item>
        <div>
          사용기간:{" "}
          <Input style={{ float: "right" }} readOnly value={useTime} />
        </div>
        <Form.Item name="giveLocation" label="배차장소">
          <Input />
        </Form.Item>
      </div>
      <div className="formBlock">
        <Title level={5}>차량정보</Title>
        <Form.Item name={["car", "number"]} label="차량번호">
          <Input />
        </Form.Item>
        <Form.Item name={["car", "name"]} label="차종">
          <Input />
        </Form.Item>
        <Form.Item name="initKm" label="출발">
          <InputNumber />
        </Form.Item>
      </div>
      <div className="formBlock">
        <Title level={5}>대여요금</Title>
        <Form.Item name="fee" label="적용요금">
          <InputNumber />
        </Form.Item>
      </div>
      <SubmitButton label={info.id ? "저장" : "등록"} />
    </FormBlock>
  );
}
