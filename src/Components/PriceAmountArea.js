import React from "react";
import { useForm } from "react-hook-form";

export default function PriceAmountArea() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="first-row">
        <input placeholder="Position Opening Price" {...register("opening-price")} />

        <select placeholder="Order Type" {...register("order-type")}>
          <option value="limit-order">Limit Order</option>
          <option value="market-order">Market Order</option>
          <option value="stop-market">Stop Market</option>
          <option value="stop-limit">Stop Limit</option>
          <option value="trailing-stop">Trailing Stop</option>
          <option value="take-profit">Take Profit</option>
          <option value="take-profit-limit">Take Profit Limit</option>
          <option value="twap">TWAP</option>
        </select>
      </div>

      <div className="second-row">
      <input placeholder="Amount BTC" {...register("amount-as-btc")} />
      <input placeholder="Amount USD" {...register("amount-as-usd")} />
      </div>


      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
