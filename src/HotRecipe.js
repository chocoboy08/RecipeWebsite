function HotRecipe() {
  return (
    <div className="hotRecipe">
      <div className="hrTitle">요즘 뜨는 레시피</div>
      <div className="hrContents">
        <img src="./gambas.png" className="hrImage" />
        <div className="hrCntText">
          <div className="hrCntTitle">감바스 알 아히요</div>
          <div className="hrCntRecipe">
            <div className="hrCntRecipe1">소요시간 : 30분</div>
            <div className="hrCntRecipe2">난이도 : </div>
            <div className="hrCntRecipe3">
              재료 : 마늘, 올리브유, 새우, 페퍼론치노
            </div>
          </div>
          <div className="hrCntIcons">
            <div className="hrMovePages">
              <img src="./leftArrow.png" className="arrowImg" />
              <div className="hrPages">1/5</div>
              <img src="./rightArrow.png" className="arrowImg" />
            </div>
            <img src="./plus.png" className="plusImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotRecipe;
