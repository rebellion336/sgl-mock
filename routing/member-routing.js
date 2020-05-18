import { Router } from "express";
import { getMemberAddress } from "../response/member-response";
export const memberRouter = Router();

memberRouter.get("/test", (req, res) => {
  console.log("Test");
});

memberRouter.get("/addresses", (req, res) => {
  console.log("=== getMemberAddress Request ===" + JSON.stringify(req.query));
  for (let element in getMemberAddress.header) {
    res.set(element, getMemberAddress.header[element]);
  }
  res.status(getMemberAddress.httpStatus).json(getMemberAddress.body);
});

memberRouter.get("/members/:id", (req, res) => {
  console.log("=== getMemberAddress Request ===" + JSON.stringify(req.query));
  //   for (let element in getMemberAddress.header) {
  //     res.set(element, getMemberAddress.header[element]);
  //   }
  const body = {
    _id: "5fecq3r9fk23tv91mf",
    username: "nichj457@cubes.postbox.in.th",
    firstname: "Nicharee",
    lastname: "Jeerasoontornwet",
    mobileNo: "",
    avatar: "",
    roles: ["member"],
    clientId: "",
    interestIndustry: [],
    interestLifeStyle: [],
    createdDate: "2019-07-22T11:02:21.296Z",
    createdBy: "nichj457@cubes.postbox.in.th",
    updatedDate: "2019-07-22T11:02:21.296Z",
    updatedBy: "nichj457@cubes.postbox.in.th",
    accountCategory: "business",
    // state: "nope"
    state: "active"
  };
  res.status(200).json(body);
});

memberRouter.get("/contactpersons", (req, res) => {
  console.log("=== getMemberAddress Request ===" + JSON.stringify(req.query));
  //   for (let element in getMemberAddress.header) {
  //     res.set(element, getMemberAddress.header[element]);
  //   }
  const body = {
    results: [
      {
        _id: "asdfasdfaa",
        memberId: "asdfasdfsdaf",
        email: "test@gmail.com",
        titleId: "hum",
        title: "Mrs.",
        contactFirstname: "Firstname",
        contactLastname: "Lasttname",
        contactMobileNo: "0999999999",
        contactBirthday: "20180302000000+0700",
        idCardNo: "1234567890123",
        listBy: "IHere",
        updateDate: "111",
        createdDate: "20180302000000+0700",
        createdBy: "Me",
        updateBy: "Me"
      }
    ]
  };
  res.status(200).json(body);
});
