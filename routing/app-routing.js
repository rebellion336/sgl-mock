import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { cartRouter } from "./cart-routing";
import { memberRouter } from "./member-routing";
import { inventoryRouter } from "./inventory-routing";
const port = 9001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));

app.use("/api/v3/sgl/cart-management", cartRouter);
app.use("/api/v3/sgl/member-management", memberRouter);
app.use("/api/v3/sgl/payment-management", inventoryRouter);

app.post("/test/kyc", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Start port : " + port);
});
