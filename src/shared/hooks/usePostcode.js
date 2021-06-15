import { useState } from "react";

const usePostcode = () => {
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  const onClickPostSearch = () => {
    const daum = window.daum;
    new daum.Postcode({
      oncomplete: (data) => {
        const { roadAddress, zonecode } = data;
        setAddress(roadAddress);
        setPostcode(zonecode);
      },
    }).open();
  };
  return { address, postcode, onClickPostSearch };
};

export default usePostcode;
