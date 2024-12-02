import { Button } from "@/components/ui/button";
import { CheckoutAddress } from "@/components/users-components/CheckoutAddress";
import React from "react";
import { getDate } from "datetimesaga";
import NavbarNew  from "@/components/NavbarNew";

const Checkout = () => {
  const { date, day, month, year } = getDate();
  return (
    <div>
      <NavbarNew/>
      <div className="mx-1 md:mx-36">
        <div className="flex-auto">
          <div className=" font-bold text-2xl mb-4">Product Details</div>
          <div className="h-60 border border-slate-300 rounded-lg"></div>
        </div>

        <div className="flex-auto">
          <div className="font-bold text-2xl my-2">Checkout</div>
          <div>
            <h1 className="text-xl">Price Details (1 Items)</h1>
            <p className="font-bold">Total Product Price + ₹110 Order</p>
            <hr className="my-2" />
            <div className="my-2">
              <h1>Total ₹110</h1>
            </div>
            <span className="text-[10px]">
              Clicking on 'Continue' will not deduct any money
            </span>

            <CheckoutAddress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
