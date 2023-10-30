function Name(props) {
  return <em>{props.children}</em>;
}

function BottomMenu() {
  return (
    <div className="item bottom">
      <h3 className="title faq-title">내 카페 새소식</h3>
      <li>[<Name>파이홀</Name>] 새소식 : 복숭아 시즌을 맞아 8월부터 복숭아 파이가 출시 됩니다~ <span>2023-07-25</span></li>
      <li>[<Name>플릭온 커피</Name>] 새소식 : 다양한 로스팅을 즐길 수 있는 테이스팅 코스 개시 <span>2023-08-01</span></li>
    </div>
  );
}

export default BottomMenu;