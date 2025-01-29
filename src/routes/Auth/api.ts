import { instance } from "../../api/api";

export const toKakaoLoginPage = async () => {
  try {
    const res = await instance.get("/api/v1/user/kakao/login/");
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};

export const kakaoSigninCallback = (code: string) => {
  const url = instance.get("/");
};
