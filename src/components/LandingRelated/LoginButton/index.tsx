import kakaoLoginImg from "@/assets/img/kakao_login.png";

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
  const kakaoLoginPageLink = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_SECRET_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  const handleKakaoLoginButtonClick = () => {
    window.location.href = kakaoLoginPageLink;
  };

  return (
    <LoginButton
      loginImgSrc={kakaoLoginImg}
      loginLabel="카카오 로그인"
      onLoginButtonClick={handleKakaoLoginButtonClick}
    />
  );
};
