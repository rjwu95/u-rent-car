import React, { useEffect, useMemo, useState } from "react";
import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { SubmitButton, FormBlock } from "../../shared/components";
import usePostcode from "../../shared/hooks/usePostcode";
import moment from "moment";
import { LISENCE_TYPE, RENT_STATUS } from "../../shared/constant";
import { staffAPI } from "../../staff/staff";

const { Option, OptGroup } = Select;
const { Title } = Typography;

export function ContractForm({ onFinish, info = null }) {
  const { address, postcode, onClickPostSearch } = usePostcode();
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    staffAPI.getStaffs().then(({ data }) => setStaffs(data));
  }, []);
  const useTime = useMemo(() => {
    return (
      (new Date(info.arrive).getTime() - new Date(info.departure).getTime()) /
        (1000 * 60 * 60) +
      "시간"
    );
  }, [info]);
  return (
    <FormBlock
      onFinish={onFinish}
      initialValues={{
        ...info,
        arrive: moment(info.arrive),
        departure: moment(info.departure),
        driver: {
          ...info.driver,
          licenseDate: moment(info.driver.licenseDate),
        },
        renter: {
          ...info.renter,
          licenseDate: moment(info.renter.licenseDate),
        },
      }}
    >
      <>
        <div className="formBlock">
          <Title level={5}>기본정보</Title>
          <Form.Item name={["outer", "name"]} label="출고자">
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
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item name={["renter", "birthday"]} label="생년월일">
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item name={["renter", "hp"]} label="휴대폰">
            <Input disabled={!!info} value={info?.renter?.hp} />
          </Form.Item>
          <Form.Item label="우편번호" name={["renter", "postcode"]}>
            <Input
              readOnly
              onClick={onClickPostSearch}
              disabled={!!info}
              value={postcode}
            />
            <Button disabled={!!info} onClick={onClickPostSearch}>
              조회
            </Button>
          </Form.Item>
          <Form.Item label="주소" name={["renter", "address"]}>
            <Input
              readOnly
              onClick={onClickPostSearch}
              value={address}
              disabled={!!info}
            />
          </Form.Item>
          <Form.Item label="상세주소" name={["renter", "detailAddress"]}>
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item label="면허번호" name={["renter", "license"]}>
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item label="면허구분" name={["renter", "licenseType"]}>
            <Select disabled={!!info}>
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
            <DatePicker disabled={!!info}></DatePicker>
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>운전자정보</Title>
          <Form.Item name={["driver", "name"]} label="성명">
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item name={["driver", "birthday"]} label="생년월일">
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item name={["driver", "hp"]} label="휴대폰">
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item label="우편번호" name={["driver", "postcode"]}>
            <Input
              readOnly
              onClick={onClickPostSearch}
              disabled={!!info}
              value={postcode}
            />
            <Button disabled={!!info} onClick={onClickPostSearch}>
              조회
            </Button>
          </Form.Item>
          <Form.Item label="주소" name={["driver", "address"]}>
            <Input
              readOnly
              onClick={onClickPostSearch}
              value={address}
              disabled={!!info}
            />
          </Form.Item>
          <Form.Item label="상세주소" name={["driver", "detailAddress"]}>
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item label="면허번호" name={["driver", "license"]}>
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item label="면허구분" name={["driver", "licenseType"]}>
            <Select disabled={!!info}>
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
            <DatePicker disabled={!!info}></DatePicker>
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>계약정보</Title>
          <Form.Item name="departure" label="출발일시">
            <DatePicker showTime disabled={!!info}></DatePicker>
          </Form.Item>
          <Form.Item name="arrive" label="도착예정">
            <DatePicker showTime disabled={!!info}></DatePicker>
          </Form.Item>
          <Form.Item name="useTime" label="사용기간">
            <div>{useTime}</div>
          </Form.Item>
          <Form.Item name="giveLocation" label="배차장소">
            <Input disabled={!!info} />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>차량정보</Title>
          <Form.Item name={["car", "number"]} label="차량번호">
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item name={["car", "name"]} label="차종">
            <Input disabled={!!info} />
          </Form.Item>
          <Form.Item name="initKm" label="출발">
            <Input disabled={!!info} />
          </Form.Item>
        </div>
        <div className="formBlock">
          <Title level={5}>대여요금</Title>
          <Form.Item name="fee" label="적용요금">
            <Input disabled={!!info} />
          </Form.Item>
        </div>
        <SubmitButton label={!info ? "등록" : "저장"} />
      </>
    </FormBlock>
  );
}
