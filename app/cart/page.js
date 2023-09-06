export default function Cart() {
  let cartItemList = ["Tomatoes", "Pasta"];
  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <h1>Cart</h1>
          {cartItemList.map((cartItem) => {
            return <CartItem item={cartItem} />;
          })}
          <Banner content={"현대카드"} />
          <Banner content={"삼성카드"} />
        </div>
      </div>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p className="cart-item-element">{props.item}</p>
      <p className="cart-item-element">$40</p>
      <p className="cart-item-element">1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}
