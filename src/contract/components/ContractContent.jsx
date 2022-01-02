import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./ContractContent.module.css";
import title from "../../assets/title_02.jpeg";
import defaultImage from "../../assets/default.jpeg";
import inImage from "../../assets/in.jpeg";
import "./contract.css";
import * as contractAPI from "../api";
import { useParams } from "react-router-dom";

export function ContractContent() {
  const params = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    contractAPI.getContract(params.id).then(({ data }) => setInfo(data));
  }, [params.id]);
  const isDiffRenterAndDriver = useMemo(
    () => info?.renter?.id !== info?.driver?.id,
    [info]
  );

  const getPrettryHp = useCallback(
    (str) => {
      return info[str].hp.match(/-/)
        ? info[str].hp?.slice(0, 9)
        : info[str].hp?.slice(0, 3) + "-" + info[str].hp?.slice(3, 7) + "-";
    },
    [info]
  );

  const prettyDate = useCallback(
    (date) => new Date(date).toLocaleString("ko-KR"),
    []
  );
  const getDiffTime = useMemo(() => {
    let diff =
      new Date(info?.arrive).getTime() - new Date(info?.departure).getTime();
    let result = "";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff = diff - days;
    result += days + "일";
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff = diff - hours;
    result += hours + "시간";
    const minutes = Math.floor(diff / (1000 * 60));
    diff = diff - minutes;
    result += minutes + "분";

    return result;
  }, [info]);

  if (!info) return null;
  return (
    <table cellPadding="0" cellSpacing="0" align="center" width="730">
      <tbody>
        <tr>
          <td className={`${styles.font9}`}>
            ※ 차량 파손 및 무단 사용 등으로 회사에 피해를 줄 경우, 귀하의 정보와
            사고 내용을 인터넷상에 등록하여도 민·형사상 이의를 제기치 않을 것을
            약속합니다.
          </td>
        </tr>
        <tr>
          <td align="center">
            <img src={title} align="absmiddle" width="300" alt="title" />
          </td>
        </tr>
        <tr height="100%">
          <td valign="top" align="center">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              bordercolordark="white"
              align="center"
              width="100%"
              bgcolor="#000000"
            >
              <tbody>
                <tr>
                  <td bgcolor="#FFFFFF">
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      bordercolordark="white"
                      align="center"
                      bgcolor="#000000"
                      width="100%"
                    >
                      <tbody>
                        <tr bgcolor="#FFFFFF" align="center">
                          <td colSpan="2">
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="100%"
                              height="40"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    className={`${styles.td6} ${styles.lineHeight30}`}
                                    colSpan="4"
                                    align="center"
                                    width="250"
                                  >
                                    <span
                                      className={`${styles.title} ${styles.lineHeight30}`}
                                    ></span>
                                  </td>
                                  <td
                                    className={`${styles.td7} ${styles.lineHeight20}`}
                                    colSpan="5"
                                    align="left"
                                  >
                                    <b>
                                      경기 평택시 고덕면 고덕로 47 (해창리)1층
                                      <br />
                                      TEL : 031-657-8259FAX : 031-657-8257
                                    </b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr bgcolor="#FFFFFF" height="33" align="center">
                          <td className={styles.td3} width="60">
                            차 종
                          </td>
                          <td>
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="100%"
                            >
                              <tbody>
                                <tr height="33" align="center">
                                  <td className={styles.td1} width="205">
                                    {info.car.name}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    차량번호
                                  </td>
                                  <td
                                    className={styles.td1}
                                    align="center"
                                    width="242"
                                  >
                                    {info.car.number}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    연료
                                  </td>
                                  <td className={styles.td2}>
                                    {info.car.fuel}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr bgcolor="#FFFFFF" height="33" align="center">
                          <td className={styles.td3}>
                            임<br />차<br />인
                          </td>
                          <td>
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="100%"
                            >
                              <tbody>
                                <tr height="25" align="center">
                                  <td className={styles.td1} width="60">
                                    성 명
                                  </td>
                                  <td className={styles.td1} width="205">
                                    {info.renter.name}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    생년월일
                                  </td>
                                  <td
                                    className={styles.td1}
                                    align="center"
                                    width="120"
                                  >
                                    {info.renter.birthday}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    연락처
                                  </td>
                                  <td className={styles.td2}>
                                    {getPrettryHp("renter")}
                                    ****
                                  </td>
                                </tr>
                                <tr height="25" align="center">
                                  <td className={styles.td1} width="60">
                                    면허번호
                                  </td>
                                  <td className={styles.td1} width="205">
                                    {info.renter.license}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    면허구분
                                  </td>
                                  <td
                                    className={styles.td1}
                                    align="center"
                                    width="120"
                                  >
                                    {info.renter.licenseType}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    유효기간
                                  </td>
                                  <td className={styles.td2} align="center">
                                    {info.renter.licenseDate?.slice(0, 10)}
                                  </td>
                                </tr>
                                <tr height="25" align="center">
                                  <td className={styles.td4} width="60">
                                    현주소
                                  </td>
                                  <td
                                    className={styles.td5}
                                    align="left"
                                    colSpan="5"
                                  >
                                    {info.renter.address +
                                      info.renter.detailAddress}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr bgcolor="#FFFFFF" height="33" align="center">
                          <td className={styles.td3}>
                            제<br />2<br />운<br />전<br />자
                          </td>
                          <td>
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="100%"
                            >
                              <tbody>
                                <tr height="32" align="center">
                                  <td className={styles.td1} width="60">
                                    성 명
                                  </td>
                                  <td className={styles.td1} width="205">
                                    {isDiffRenterAndDriver && info.driver.name}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    생년월일
                                  </td>
                                  <td
                                    className={styles.td1}
                                    align="center"
                                    width="120"
                                  >
                                    {isDiffRenterAndDriver &&
                                      info.driver.birthday}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    연락처
                                  </td>
                                  <td className={styles.td2}>
                                    {isDiffRenterAndDriver &&
                                      getPrettryHp("driver")}
                                  </td>
                                </tr>
                                <tr height="32" align="center">
                                  <td className={styles.td1} width="60">
                                    면허번호
                                  </td>
                                  <td className={styles.td1} width="205">
                                    {isDiffRenterAndDriver &&
                                      info.driver.license}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    면허구분
                                  </td>
                                  <td
                                    className={styles.td1}
                                    align="center"
                                    width="120"
                                  >
                                    {isDiffRenterAndDriver &&
                                      info.driver.licenseType}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    유효기간
                                  </td>
                                  <td className={styles.td2} align="center">
                                    {isDiffRenterAndDriver &&
                                      info.driver.licenseDate.slice(0, 10)}
                                  </td>
                                </tr>
                                <tr height="32" align="center">
                                  <td className={styles.td4} width="60">
                                    현주소
                                  </td>
                                  <td
                                    className={styles.td5}
                                    align="left"
                                    colSpan="5"
                                  >
                                    {isDiffRenterAndDriver &&
                                      info.driver.address +
                                        info.driver.detailAddress}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      bordercolordark="white"
                      align="center"
                      bgcolor="#000000"
                      width="100%"
                    >
                      <tbody>
                        <tr bgcolor="#FFFFFF" height="25" align="center">
                          <td className={styles.td3} width="60">
                            대<br />여<br />기<br />간
                          </td>
                          <td>
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="100%"
                            >
                              <tbody>
                                <tr height="25" align="center">
                                  <td className={styles.td1} width="75">
                                    출 고 일 시 :
                                  </td>
                                  <td className={styles.td8} width="190">
                                    {prettyDate(info.departure)}
                                  </td>
                                  <td className={styles.td1} width="60">
                                    출고 :{" "}
                                  </td>
                                  <td
                                    className={styles.td8}
                                    width="120"
                                    align="right"
                                  >
                                    {info.initKm}Km
                                  </td>
                                  <td className={styles.td4} width="60">
                                    계 약 금
                                  </td>
                                  <td className={styles.td5} align="right">
                                    0
                                  </td>
                                </tr>
                                <tr
                                  bgcolor="#FFFFFF"
                                  height="25"
                                  align="center"
                                >
                                  <td className={styles.td1}>입 고 일 시 :</td>
                                  <td className={styles.td8}>
                                    {prettyDate(info.arrive)}
                                  </td>
                                  <td className={styles.td1}>입고 : </td>
                                  <td className={styles.td8} align="right">
                                    Km
                                  </td>
                                  <td className={styles.td1}>잔 액</td>
                                  <td className={styles.td5} align="right">
                                    0
                                  </td>
                                </tr>
                                <tr
                                  bgcolor="#FFFFFF"
                                  height="25"
                                  align="center"
                                >
                                  <td className={styles.td1}>최종입고일 :</td>
                                  <td className={styles.td8}>
                                    2021 년06 월18 일14 시42 분
                                  </td>
                                  <td className={styles.td1} colSpan="2">
                                    {getDiffTime}
                                  </td>
                                  <td className={styles.td1}>추가요금</td>
                                  <td className={styles.td5} align="right">
                                    0
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      bordercolordark="white"
                      align="center"
                      bgcolor="#000000"
                      width="100%"
                    >
                      <tbody>
                        <tr bgcolor="#FFFFFF" height="25" align="center">
                          <td className={styles.td6} width="60">
                            보험회사
                          </td>
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 0px 0px 1px",
                              borderColor: "#000000",
                            }}
                            width="180"
                          ></td>
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 0px 0px 1px",
                              borderColor: "#000000",
                            }}
                            width="60"
                          >
                            정비공장
                          </td>
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 0px 0px 1px",
                              borderColor: "#000000",
                            }}
                            width="204"
                          ></td>
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 0px 0px 1px",
                              borderColor: "#000000",
                            }}
                            width="60"
                          >
                            합계
                          </td>
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 2px 0px 1px",
                              borderColor: "#000000",
                            }}
                            align="right"
                          >
                            0
                          </td>
                        </tr>
                        <tr bgcolor="#FFFFFF" height="25" align="center">
                          <td className={styles.td3}>접수번호</td>
                          <td className={styles.td1}></td>
                          <td className={styles.td1}>피해차량</td>
                          <td className={styles.td1}></td>
                          <td className={styles.td1}>차종</td>
                          <td className={styles.td2}></td>
                        </tr>
                        <tr bgcolor="#FFFFFF" height="25" align="center">
                          <td className={styles.td3}>보험사담당</td>
                          <td className={styles.td1}></td>
                          <td className={styles.td1}>연락처</td>
                          <td className={styles.td1}></td>
                          <td className={styles.td1}>FAX</td>
                          <td className={styles.td2}></td>
                        </tr>
                        <tr bgcolor="#FFFFFF" height="25" align="center">
                          <td className={styles.td3}>비고</td>
                          <td
                            className={styles.td5}
                            colSpan="5"
                            align="left"
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      bordercolordark="white"
                      align="center"
                      bgcolor="#000000"
                      width="100%"
                      height="100%"
                    >
                      <tbody>
                        <tr bgcolor="#FFFFFF" height="33" align="center">
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 2px 0px 2px",
                              borderColor: "#000000",
                              padding: "3px",
                              fontSize: "8px",
                              lineHeight: "10px",
                            }}
                            align="left"
                          >
                            본인은 「개인정보보호법」 제15조등 법렵에 의하여
                            에스카(이하 "회사" 라 합니다)가 아래와 같은 내용으로
                            차량 임대차계약서에 기재한 본인의 정보 등을
                            수집·이용·제공하는 것에 동의합니다.
                            <br />
                            이 동의서는 계약의 갱신 등으로 변경되는 경우에도
                            유효합니다.
                            <br />
                            1. 개인정보의 수집·이용에 관한 동의
                            <br />
                            1) 수집·이용목적 - 본인확인, 개인식별, 계약 체결의사
                            확인, 차량임대차계약 이행 및 요금
                            정산/청구/수납/추심, 물품배송, 도로교통법 위반
                            등으로 이한 관태료/법칙금 등 처리, 차량사고 처리,
                            <br />
                            보험계약체결·유지관리(해지, 변경, 부활, 취소, 조회
                            등) 보험금 지급·심사, 보험사고 조사(보험사기
                            조사포함), 고지사항 전달, 고객 문의/불만처리,
                            고객관리, 해피콜(고객만족도 조사), 차량정비/
                            <br />
                            수리/관리/긴급출동/배반차/대차 서비스 등 제공{" "}
                            <input type="checkbox" /> 동의함{" "}
                            <input type="checkbox" /> 동의하지 않음
                            <br />
                            2)수집·이용 항목
                            <br />
                            가) 계약 체결 등을 위하여 수집·이용되는 정보 - 개인
                            식별정보 :
                            성명,상호,생년월일,국적·성별(생년월일,외국인등록번호
                            수집·이용 동의 시) 생년월일(여권·외국인등록번호
                            운전면허번호
                            <br />
                            등 고유식별정보, 법인등록번호, 사업자등록번호,
                            주소(자택·직장·사업장)연락
                            전화번호(휴대폰·자택·직장), 운전면허 종류,
                            면허발급일, 면허증 갱신기간,
                            이메일주소(전자세금계산서 등 수령시)
                            <br />
                            3)보유 및 이용기간 - 개인정보 수집·이용 목적
                            달성시까지 또는 본인의 수집·이용 동의 철회
                            요청시까지 <input type="checkbox" /> 동의함{" "}
                            <input type="checkbox" /> 동의하지 않음
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      bordercolordark="white"
                      align="center"
                      bgcolor="#000000"
                      width="100%"
                      height="100%"
                    >
                      <tbody>
                        <tr bgcolor="#FFFFFF" height="33" align="center">
                          <td
                            style={{
                              borderStyle: "solid",
                              borderWidth: "2px 0px 2px 2px",
                              borderColor: "#000000",
                            }}
                            width="50%"
                            valign="top"
                          >
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <table
                                      border="0"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <img
                                              src={decodeURIComponent(
                                                info.carCheckUrl
                                              )}
                                              height="280"
                                              alt="default"
                                              style={{
                                                backgroundImage: `url(${defaultImage})`,
                                                backgroundSize: 205.875,
                                                WebkitPrintColorAdjust: "exact",
                                              }}
                                            />
                                          </td>
                                          <td
                                            width="150"
                                            style={{ lineHeight: "25px" }}
                                            align="left"
                                          >
                                            <b style={{ fontSize: "15px" }}>
                                              ※ 점 검 사 항
                                            </b>
                                            <br />
                                            1. 전조등,라이트방향등,지시등,후미등
                                            <br />
                                            2. 카세트 및 오디오
                                            <br />
                                            3. 와이퍼, 경음기
                                            <br />
                                            4. 각종 게이지
                                            <br />
                                            5. 스페어 타이어
                                            <br />
                                            6. 네비게이션
                                            <br />
                                            7. 기 타
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`${styles.td8} ${styles.padding10}`}
                                  >
                                    저희 차량을 이용해 주셔서 대단히 감사합니다.
                                    <br />
                                    고객은 차량이용중 교통법규(속도위반 및
                                    주·정차 위반 등)
                                    <br />
                                    위반에 대한 책임을 집니다.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            className={`${styles.td10} ${styles.padding10}`}
                            align="left"
                          >
                            ◆ 차량 대여 약관 ◆<br />
                            ▷운전자범위: 계약자 본인 및 공동임차인(제2운전자)
                            <br />
                            ▷운전자연령: 만21세 / 만26세이상
                            <br />
                            -운전면허 취득일로부터 1년이상
                            <br />
                            ▷보장내용
                            <br />
                            ■ 대인배상(대인 I) : 자배법한도(면책금20만원)
                            <br />
                            (대인 II) : 무한대
                            <br />
                            ■ 대물배상:2억원한도(면책금 30만원)
                            <br />
                            ■ 자기신체사고:1500만원한도
                            <br />
                            ■ 자기차량손해:미가입 / 가입-보험사 가입금액한도
                            <br />
                            (자기부담금 30~50만원)
                            <br />
                            <font className={styles.font9}>
                              ※ 본인은 피해차량의 소유자인바 차량수리기간 동안
                              대여한 차량의 대여료에 대한 청구 및 수령에 관한
                              일체의 권한을 에스카에 임의 합니다.
                              <br />※ 본인은 본 계약서상 기록된 사항과 이면의
                              약관을 숙지하고 승인함에 있어 이를 증하기 위하여
                              서명함.
                            </font>
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              width="300"
                              align="right"
                            >
                              <tbody>
                                <tr height="45">
                                  <td className={styles.td9} width="60">
                                    임차인
                                  </td>
                                  <td className={styles.td9} align="center">
                                    유건
                                  </td>
                                  <td
                                    className={styles.td9}
                                    width="50"
                                    align="right"
                                  >
                                    <img
                                      src={inImage}
                                      width="40"
                                      align="absmiddle"
                                      alt="인"
                                    />
                                  </td>
                                  <td width="40"></td>
                                </tr>
                                <tr height="45">
                                  <td className={styles.td9}>제2운전자</td>
                                  <td className={styles.td9} align="center">
                                    {isDiffRenterAndDriver && info.driver.name}
                                  </td>
                                  <td className={styles.td9} align="right">
                                    <img
                                      src={inImage}
                                      width="40"
                                      align="absmiddle"
                                      alt="인"
                                    />
                                  </td>
                                  <td width="40"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
