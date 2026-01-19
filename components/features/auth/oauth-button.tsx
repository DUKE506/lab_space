export const KakaoLoginButton = () => {
  const handleKakakoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };
  return (
    <button
      className="bg-[#FEE500] w-full py-2   border border-(--border) rounded-(--default-rounded) cursor-pointer  "
      type="button"
      onClick={handleKakakoLogin}
    >
      카카오 로그인
    </button>
  );
};
