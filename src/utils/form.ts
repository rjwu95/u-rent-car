export const validateMessages = {
  // eslint-disable-next-line
  required: "${label} 는 필수값입니다!",
  types: {
    // eslint-disable-next-line
    number: "${label} 는 숫자만 입력하세요!",
  },
  number: {
    // eslint-disable-next-line
    range: "${label} 는 ${min} 과 ${max} 사이여야 합니다.",
  },
};

export const formLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

export const onFinishFailed = () => {
  alert("입력값을 확인해 주세요");
};
