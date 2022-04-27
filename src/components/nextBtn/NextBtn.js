import nextLogo from "../../images/icon-next.svg";
import "../../index.css";

export default function NextBtn({ imgCarouselNext, NextBtnStyles }) {
  return (
    <div className={`zoom-btn ${NextBtnStyles}`} onClick={imgCarouselNext}>
      <img src={nextLogo} alt="next logo" />
    </div>
  );
}
