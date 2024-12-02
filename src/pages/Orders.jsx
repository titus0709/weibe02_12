import AdminOrderChart from "@/components/admin-components/AdminOrderChart";
import AdminRevenueChart from "@/components/admin-components/AdminRevenueChart";
import { ChartDropDown } from "@/components/admin-components/ChartDropDown";
import { DataTable } from "@/components/admin-components/data-table";
import NavbarNew  from "@/components/NavbarNew";
import React from "react";

function Orders() {
  const adminOrderColumns = [
    {
      accessorKey: "orderId",
      header: "Order Id",
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
    },

    {
      accessorKey: "orderDate",
      header: "Order Date",
    },
    {
      accessorKey: "deliveryDate",
      header: "Delivery Date",
    },
    {
      accessorKey: "orderStatus",
      header: "Order Status",
    },
    {
      accessorKey: "details",
      header: "Details",
      cell: ({ value }) => (
        <div className="flex">
          <div className="font-bold">View</div>
        </div>
      ),
    },
  ];
  return (
    <>
      
      <div className="">
        <div>
          <div className="flex items-center">
            <div className="my-4 text-2xl font-bold mx-1">Order Summary</div>
            <ChartDropDown />
          </div>
          <AdminOrderChart />
        </div>
      </div>
      <div className="my-4">
        <p className="text-2xl font-bold">Orders</p>
      </div>
      <DataTable columns={adminOrderColumns} data={[]} />
    </>
  );
}

export default Orders;
