import kakaoLoginImg from "@/assets/img/kakao_login.png";

import { useSupabase } from "@/supabase/useSupabase";

interface LoginButtonProps {
  loginLabel: string;
  loginImgSrc: string;
  onLoginButtonClick: () => void;
}

const LoginButton = ({
  loginLabel,
  loginImgSrc,
  onLoginButtonClick,
}: LoginButtonProps) => {
  return (
    <button className="flex" onClick={onLoginButtonClick}>
      <img src={loginImgSrc} alt={loginLabel}></img>
    </button>
  );
};

export const KakaoLoginButton = () => {
  const { client, session } = useSupabase();

  const handleKakaoLoginButtonClick = async () => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: "https://lnsblvsrlwswhykptacr.supabase.co/auth/v1/callback",
      },
    });
  };

  return (
    <LoginButton
      loginImgSrc={kakaoLoginImg}
      loginLabel="카카오 로그인"
      onLoginButtonClick={handleKakaoLoginButtonClick}
    />
  );
};
