import React from "react";
import OrderItem from "../../components/UserOrderItem";
import EditOrder from "../../components/overlays/UserEditOrder";
import OrderMsg from "../../components/overlays/PlacedOrderMsg";
import "./UserOrders.scss";

type Props = {};

const UserOrders = (props: Props) => {
  return (
    <section className="order-title">
      <img src="../src/assets/orders-title.svg" alt="My Order" />

      <section className="wrapper">
        <OrderItem />
      </section>
    </section>
  );
};

export default UserOrders;
