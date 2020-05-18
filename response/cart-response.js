export const getCarts = {
  httpStatus: 200,
  header: {
    "X-Transaction-Id": "dsddsdss",
    "X-Public-Id": "example@gmail.com"
  },
  body: {
    _id: "b9fAicvg0q9",
    member: {
      memberId: "iFlcx9klIqp",
      username: "sgltest2019@gmail.com"
    },
    cartsItems: [
      {
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
        productIAL: "1.9",
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
      },
      {
        _id: "zNlzbtry0lZ",
        cartsId: "b9fAicvg0q9",
        merchantId: "MEV747qhJ2f",
        merchantName: "AIS IoT Alliance Program",
        productId: "Bun3cZKhyEQ",
        variantId: "Hsdjaur16Ng",
        totalQuantity: 1,
        createdBy: "sgltest2019@gmail.com",
        updatedBy: "sgltest2019@gmail.com",
        createdDate: "2020-02-27T07:40:51.657Z",
        updatedDate: "2020-02-27T07:40:51.657Z",
        merchantLogo:
          "https://iot-apiv3.ais.co.th/static/members/mcGa2cwT/merchant/AIAP LOGO.jpg",
        merchantEmail: "playgroundsupport@ais.co.th",
        isRequireShipping: true,
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
        preparationOrder: { duration: "7", durationUnit: "days" },
        productName: "DEVIO Smart Cold Chain I",
        purchasingEnabled: true,
        productPublic: true,
        productType: "physical",
        isFreeShipping: true,
        productIAL: "1.9",
        thumbnailImagePath:
          "https://iot-apiv3.ais.co.th/static/products/Bun3cZKhyEQ/images/thumbnail/1.jpg",
        sku: "Bun3cZKhyEQ-Hsdjaur16Ng",
        stockQuantity: 100,
        weight: 0,
        weightUnit: "kg",
        optionValues: [],
        skuPurchasingEnabled: true,
        orderQuantityMaximum: 5,
        orderQuantityMinimum: 1,
        skuPurchasingDisabledMessage: "Out of stock",
        productPrice: 4142,
        shippingChannels: [
          {
            shippingId: "WroVfr35fQA",
            shippingName: "Self Service",
            shippingFeeIncTax: 0
          }
        ],
        productTotalPrice: 4142
      }
    ],
    subTotalIncTax: 4655.6,
    totalIncTax: 4655.6
  }
  // body: {
  //   subTotalIncTax: 640,
  //   totalIncTax: 640,
  //   _id: 'hi2MsgVUJCq',
  //   member: { memberId: 'SKwdDlwZ', username: 'sglp2021@gmail.com' },
  //   cartsItems: [
  //     {
  //       _id: 'WUbXW8xR3ar',
  //       cartsId: 'hi2MsgVUJCq',
  //       merchantId: '5d64d5187f583d2c20ea62e1',
  //       merchantName: 'Haxtivitiez',
  //       merchantLogo: '',
  //       merchantEmail: '',
  //       productId: 'LX5twUzrGQi',
  //  "productLevel" : "1.0",
  //       variantId: 'PuessjjSseW',
  //       totalQuantity: 2,
  //       createdBy: 'sglp2021@gmail.com',
  //       updatedBy: null,
  //       createdDate: '2019-10-25T07:49:31.636Z',
  //       updatedDate: '2019-10-25T10:28:10.374Z',
  //       isRequireShipping: false,
  //       paymentChannels: [
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e4',
  //           paymentChannelName: 'CREDIT TERM',
  //           detail: '30 วัน'
  //         },
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e5',
  //           paymentChannelName: 'CASH',
  //           detail: 'Include: Rabbit LINE Pay / Credit Card / Debit Card'
  //         }
  //       ],
  //       preparationOrder: { duration: '5', durationUnit: 'วันทำการ' },
  //       productName: 'SMS',
  //       purchasingEnabled: true,
  //       productPublic: true,
  //       productGroup: 'internal',
  //       productType: 'digital',
  //       isFreeShipping: false,
  //       thumbnailImagePath:
  //         'http://localhost:7443/static/products/LX5twUzrGQi/images/thumbnail/6GPcW0b28gm.png',
  //       sku: 'LX5twUzrGQi-PuessjjSseW',
  //       stockQuantity: 100,
  //       weight: 0,
  //       weightUnit: 'kg',
  //       optionValues: [{ optionDisplayName: 'Package ', label: 'LARGE 10000 transactions' }],
  //       skuPurchasingEnabled: false,
  //       orderQuantityMaximum: 60,
  //       orderQuantityMinimum: 1,
  //       productPrice: 3200,
  //       isFreeShipping: false,
  //       shippingChannels: [],
  //       productTotalPrice: 6400
  //     },
  //     {
  //       _id: 'WUbXW8dffc3ar',
  //       cartsId: 'hi2MsgVUJCq',
  //       merchantId: '5d64d5187f583d2c20ea62e1',
  //       merchantName: 'Haxtivitiez',
  //       merchantLogo: '',
  //       merchantEmail: '',
  //       productId: 'LX5twUzrdfgdfi',
  //  "productLevel" : "1.0",
  //       variantId: 'PuessjjSseW',
  //       totalQuantity: 2,
  //       createdBy: 'sglp2021@gmail.com',
  //       updatedBy: null,
  //       createdDate: '2019-10-25T07:49:31.636Z',
  //       updatedDate: '2019-10-25T10:28:10.374Z',
  //       isRequireShipping: true,
  //       paymentChannels: [
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e4',
  //           paymentChannelName: 'CREDIT TERM',
  //           detail: '30 วัน'
  //         },
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e5',
  //           paymentChannelName: 'CASH',
  //           detail: 'Include: Rabbit LINE Pay / Credit Card / Debit Card'
  //         }
  //       ],
  //       preparationOrder: { duration: '5', durationUnit: 'วันทำการ' },
  //       productName: 'SMS',
  //       purchasingEnabled: true,
  //       productPublic: true,
  //       productGroup: 'internal',
  //       productType: 'digital',
  //       isFreeShipping: true,
  //       thumbnailImagePath:
  //         'http://localhost:7443/static/products/LX5twUzrGQi/images/thumbnail/6GPcW0b28gm.png',
  //       sku: 'LX5twUzrGQi-PuessjjSseW',
  //       stockQuantity: 100,
  //       weight: 0,
  //       weightUnit: 'kg',
  //       optionValues: [{ optionDisplayName: 'Package ', label: 'LARGE 10000 transactions' }],
  //       skuPurchasingEnabled: false,
  //       orderQuantityMaximum: 60,
  //       orderQuantityMinimum: 1,
  //       productPrice: 3200,
  //       isFreeShipping: true,
  //       shippingChannels: [
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e1',
  //           shippingName: 'ThaiPost - EMS',
  //           shippingFeeIncTax: 50
  //         },
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e2',
  //           shippingName: 'Kerry',
  //           shippingFeeIncTax: 60
  //         },
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e3',
  //           shippingName: 'Kerry',
  //           shippingFeeIncTax: 100
  //         }
  //       ],
  //       productTotalPrice: 6400
  //     },
  //     {
  //       _id: 'WUbXW8dffc3ar',
  //       cartsId: 'hi2MsgVUJCq',
  //       merchantId: '5d64d5187f583d2c20ea62e1',
  //       merchantName: 'Haxtivitiez',
  //       merchantLogo: '',
  //       merchantEmail: '',
  //       productId: 'LX5twUzrdfgdfi',
  //  "productLevel" : "1.0",
  //       variantId: 'PuessjjSseW',
  //       totalQuantity: 2,
  //       createdBy: 'sglp2021@gmail.com',
  //       updatedBy: null,
  //       createdDate: '2019-10-25T07:49:31.636Z',
  //       updatedDate: '2019-10-25T10:28:10.374Z',
  //       isRequireShipping: true,
  //       paymentChannels: [
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e4',
  //           paymentChannelName: 'CREDIT TERM',
  //           detail: '30 วัน'
  //         },
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e5',
  //           paymentChannelName: 'CASH',
  //           detail: 'Include: Rabbit LINE Pay / Credit Card / Debit Card'
  //         }
  //       ],
  //       preparationOrder: { duration: '5', durationUnit: 'วันทำการ' },
  //       productName: 'SMS',
  //       purchasingEnabled: true,
  //       productPublic: true,
  //       productGroup: 'internal',
  //       productType: 'digital',
  //       isFreeShipping: true,
  //       thumbnailImagePath:
  //         'http://localhost:7443/static/products/LX5twUzrGQi/images/thumbnail/6GPcW0b28gm.png',
  //       sku: 'LX5twUzrGQi-PuessjjSseW',
  //       stockQuantity: 100,
  //       weight: 0,
  //       weightUnit: 'kg',
  //       optionValues: [{ optionDisplayName: 'Package ', label: 'LARGE 10000 transactions' }],
  //       skuPurchasingEnabled: false,
  //       orderQuantityMaximum: 60,
  //       orderQuantityMinimum: 1,
  //       productPrice: 3200,
  //       isFreeShipping: true,
  //       shippingChannels: [
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e1',
  //           shippingName: 'ThaiPost - EMS',
  //           shippingFeeIncTax: 50
  //         },
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e2',
  //           shippingName: 'Kerry',
  //           shippingFeeIncTax: 60
  //         }
  //       ],
  //       productTotalPrice: 6400
  //     },
  //     {
  //       _id: 'WUbXW8xRear',
  //       cartsId: 'hi2MsgVUJCq',
  //       merchantId: '5d64d5187f583d2c20ea62e1',
  //       merchantName: 'Haxtivitiez',
  //       merchantLogo: '',
  //       merchantEmail: '',
  //       productId: 'LX5twUeaGQi',
  //  "productLevel" : "1.0",
  //       variantId: 'PuesggjSseW',
  //       totalQuantity: 1,
  //       createdBy: 'sglp2021@gmail.com',
  //       updatedBy: null,
  //       createdDate: '2019-10-25T07:49:31.636Z',
  //       updatedDate: '2019-10-25T10:28:10.374Z',
  //       isRequireShipping: false,
  //       paymentChannels: [
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e4',
  //           paymentChannelName: 'CREDIT TERM',
  //           detail: '30 วัน'
  //         },
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e5',
  //           paymentChannelName: 'CASH',
  //           detail: 'Include: Rabbit LINE Pay / Credit Card / Debit Card'
  //         }
  //       ],
  //       preparationOrder: { duration: '5', durationUnit: 'วันทำการ' },
  //       productName: 'SMS',
  //       purchasingEnabled: true,
  //       productPublic: true,
  //       productGroup: 'internal',
  //       productType: 'digital',
  //       isFreeShipping: true,
  //       thumbnailImagePath:
  //         'http://localhost:7443/static/products/LX5twUzrGQi/images/thumbnail/6GPcW0b28gm.png',
  //       sku: 'LX5twUzrGQi-PuessjjSseW',
  //       stockQuantity: 0,
  //       weight: 0,
  //       weightUnit: 'kg',
  //       optionValues: [{ optionDisplayName: 'Package ', label: 'LARGE 10000 transactions' }],
  //       skuPurchasingEnabled: false,
  //       orderQuantityMaximum: 100,
  //       orderQuantityMinimum: 1,
  //       productPrice: 3200,
  //       isFreeShipping: false,
  //       shippingChannels: [
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e1',
  //           shippingName: 'ThaiPost - EMS',
  //           shippingFeeIncTax: 50
  //         },
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e2',
  //           shippingName: 'Kerry',
  //           shippingFeeIncTax: 60
  //         }
  //       ],
  //       productTotalPrice: 6400
  //     },
  //     {
  //       _id: 'WufffW8xar',
  //       cartsId: 'hi2MsgVUJCq',
  //       merchantId: '5d64d5187f583d2c20ea6ii1',
  //       merchantName: '55555555',
  //       merchantLogo: '',
  //       merchantEmail: '',
  //       productId: 'LjjjjtwUzrGQi',
  //"productLevel" : "1.0",
  //       variantId: 'PufffiojojSseW',
  //       totalQuantity: 9,
  //       createdBy: 'sglp2021@gmail.com',
  //       updatedBy: null,
  //       createdDate: '2019-10-25T07:49:31.636Z',
  //       updatedDate: '2019-10-25T10:28:10.374Z',
  //       isRequireShipping: false,
  //       paymentChannels: [
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e4',
  //           paymentChannelName: 'CREDIT TERM',
  //           detail: '30 วัน'
  //         },
  //         {
  //           paymentChannelId: '5d64d5187f583d2c20ea62e5',
  //           paymentChannelName: 'CASH',
  //           detail: 'Include: Rabbit LINE Pay / Credit Card / Debit Card'
  //         }
  //       ],
  //       preparationOrder: { duration: '5', durationUnit: 'วันทำการ' },
  //       productName: 'SMS',
  //       purchasingEnabled: true,
  //       productPublic: true,
  //       productGroup: 'internal',
  //       productType: 'digital',
  //       isFreeShipping: true,
  //       thumbnailImagePath:
  //         'http://localhost:7443/static/products/LX5twUzrGQi/images/thumbnail/6GPcW0b28gm.png',
  //       sku: 'LX5twUzrGQi-PuesshhhseW',
  //       stockQuantity: 2,
  //       weight: 0,
  //       weightUnit: 'kg',
  //       optionValues: [{ optionDisplayName: 'Package ', label: 'LARGE 10000 transactions' }],
  //       skuPurchasingEnabled: false,
  //       orderQuantityMaximum: 60,
  //       orderQuantityMinimum: 1,
  //       productPrice: 3200,
  //       isFreeShipping: false,
  //       shippingChannels: [
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e1',
  //           shippingName: 'ThaiPost - EMS',
  //           shippingFeeIncTax: 50
  //         },
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e2',
  //           shippingName: 'Kerry',
  //           shippingFeeIncTax: 60
  //         },
  //         {
  //           shippingId: '5d64d5187f583d2c20ea62e3',
  //           shippingName: 'Kerry',
  //           shippingFeeIncTax: 100
  //         }
  //       ],
  //       productTotalPrice: 6400
  //     }
  //   ]
  // }
};

export const getCountProductOfCart = {
  httpStatus: 200,
  header: {
    "X-Transaction-Id": "dsddsdss",
    "X-Public-Id": "example@gmail.com"
  },
  body: {
    totalProductQuantity: 3
  }
};

export const deleteProductFromCarts = {
  httpStatus: 200,
  header: {
    "X-Transaction-Id": "dsddsdss",
    "X-Public-Id": "example@gmail.com"
  }
};

export const adjustCartsItems = {
  httpStatus: 200,
  header: {
    "X-Transaction-Id": "dsddsdss",
    "X-Public-Id": "example@gmail.com"
  }
};
