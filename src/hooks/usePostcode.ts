import { useState } from "react";

const usePostcode = () => {
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
  return { address, postcode, onClickPostSearch };
};

export default usePostcode;
