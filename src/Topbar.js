function Topbar() {
  const topbarItems = ["소개", "내 레시피들", "검색", "등록하기"];
  const itemList = topbarItems.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <div className="topbar">
      <div className="tbTitle">My Recipes</div>
      <ul className="tbItemList">{itemList}</ul>
      <div className="logInList">
        <div className="logIn">로그인</div>
        <div>회원가입</div>
      </div>
    </div>
  );
}

export default Topbar;
