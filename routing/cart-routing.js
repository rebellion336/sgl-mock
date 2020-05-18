import { Router } from "express";
import {
  getCarts,
  getCountProductOfCart,
  deleteProductFromCarts,
  adjustCartsItems
} from "../response/cart-response";
export const cartRouter = Router();

cartRouter.get("/test", (req, res) => {
  console.log("Test");
});

cartRouter.get("/carts", (req, res) => {
  console.log("=== GetCarts Request ===" + JSON.stringify(req.query));
  for (let element in getCarts.header) {
    res.set(element, getCarts.header[element]);
  }
  // res.status(500).json(getCarts.body);
  res.status(getCarts.httpStatus).json(getCarts.body);
});

cartRouter.get("/carts/count", (req, res) => {
  console.log("===Request===" + req.query.memberId);
  for (let element in getCountProductOfCart.header) {
    res.set(element, getCountProductOfCart.header[element]);
  }
  res.status(getCountProductOfCart.httpStatus).json(getCountProductOfCart.body);
});

cartRouter.delete("/carts", (req, res) => {
  console.log("===Request===" + req.query);
  for (let element in deleteProductFromCarts.header) {
    res.set(element, deleteProductFromCarts.header[element]);
  }
  res.status(deleteProductFromCarts.httpStatus).send();
});

cartRouter.post("/carts/adjust", (req, res) => {
  console.log("===Request===" + JSON.stringify(req.body));
  // set body response
  const totalPrice = req.body.totalQuantity * 1000;
  const totalPrices = "totalQuantity: req.body.totalQuantity,";
  const body = {
    _id: "VCQyT9cLApL",
    cartsId: "b9fAicvg0q9",
    merchantId: "YpQPeOAwyWj",
    merchantName: "Advanced Wireless Network",
    productId: "gntwvI9YudG",
    variantId: "YdjGlfy5ixF",
    totalQuantity: 1,
    createdBy: "sgltest2019@gmail.com",
    updatedBy: "sgltest2019@gmail.com",
    createdDate: "2020-02-27T07:38:46.728Z",
    updatedDate: "2020-02-27T07:38:46.728Z",
    merchantLogo:
      "https://iot-apiv3.ais.co.th/static/members/mcGa2cwT/merchant/awn.png",
    merchantEmail: "playgroundsupport@ais.co.th",
    isRequireShipping: false,
    paymentChannels: [
      {
        paymentChannelId: "5db984dc511aba62a403bdf0",
        paymentChannelName: "Credit Card"
      },
      {
        paymentChannelId: "5db984f5511aba62a403bf01",
        paymentChannelName: "Rabbit Line Pay"
      }
    ],
    preparationOrder: { duration: "5", durationUnit: "วันทำการ" },
    productName: "SMS",
    purchasingEnabled: true,
    productPublic: true,
    productType: "digital",
    isFreeShipping: true,
    productIAL: "1.1",
    thumbnailImagePath:
      "https://iot-authv3.ais.co.th/static/products/gntwvI9YudG/images/thumbnail/722RgKaKdvA.PNG",
    sku: "gntwvI9YudG-YdjGlfy5ixF",
    stockQuantity: 110,
    weight: 0,
    weightUnit: "kg",
    optionValues: [
      {
        optionDisplayName: "Package",
        label: "SMALL 1000 transactions"
      }
    ],
    skuPurchasingEnabled: true,
    orderQuantityMinimum: 1,
    skuPurchasingDisabledMessage: "Out of stock",
    productPrice: 513.6,
    shippingChannels: [],
    productTotalPrice: 513.6
  };

  for (let element in adjustCartsItems.header) {
    res.set(element, adjustCartsItems.header[element]);
  }
  res.status(adjustCartsItems.httpStatus).json(body);
  // res.send(400, { resultCode: "hi, there was an error" });
});

cartRouter.get("/carts/items/", (req, res) => {
  console.log("===Request===" + req.query._id);
  const body = {
    _id: "PPBqWA9",
    subTotalIncTax: 2000,
    totalIncTax: 2000,
    member: {
      memberId: "5d47b395e725620012730b2f",
      username: "registertest07@yahoo.com"
    },
    cartsItems: [
      {
        _id: "CXBqWA8",
        cartsItems: "PPBqWA9",
        productId: "productxx8905321",
        productName: "Googel daydram",
        merchantId: "fenjkvnr88888",
        merchantName: "Google Company",
        preparationOrder: {
          duration: "7-10",
          durationUnit: "วัน"
        },
        priceDetail: {
          priceType: "flat",
          label: "PLAN A",
          priceItems: {
            detail: "จำนวน 1-10 ชิ้น",
            quantity: 1,
            quantityStart: 1,
            querytityEnd: 10,
            unit: "ชิ้น"
          }
        },
        sku: "gen productRefId+attributeID",
        weight: 20,
        weightUnit: "kg",
        dimention: {
          height: 10,
          heightUnit: "cm",
          width: 29,
          widthUnit: "cm",
          depth: 20,
          depthUnit: "cm"
        },
        optionValues: [
          {
            optionDisplayName: "Style",
            label: "Wooden"
          },
          {
            optionDisplayName: "Color",
            label: "Blue"
          },
          {
            optionDisplayName: "Size",
            label: "Small"
          }
        ],
        shippingChannels: [
          {
            shippingId: "99jewjfb",
            shippingName: "thaipost",
            shippingFeeIncTax: "89",
            shippingStatus: true
          },
          {
            shippingId: "jjjjjfew",
            shippingName: "supplier service",
            shippingFeeIncTax: "100",
            shippingStatus: false
          }
        ],
        isRequireShipping: true,
        isFreeShipping: "89",
        stockQuantity: 10,
        orderQuantityMinimum: 1,
        orderQuantityMaximum: 5,
        purchasingDisabled: true,
        productPublic: true,
        purchasingDisabledMessage: "Out of Stock",
        productPrice: 1000,
        productTotalPrice: 1000,
        totalQuantity: 1,
        thumbnailImagePath: "khuntharn",
        productDetailPath: "",
        createdBy: "khuntharn",
        createdDate: "",
        updateBy: "khuntharn",
        updateDate: ""
      }
    ],
    createdBy: "khuntharn",
    createdDate: "",
    updateBy: "khuntharn",
    updateDate: ""
  };
  res.status(200).json(body);
});
