import express, { Request, Response } from "express";
import { HttpStatusCode } from "../utils/constants";
import { BrandsRoute } from "./brand.route";
import { CategoriesRoute } from "./category.route";
import { ProductRoute } from "./product.route";
import { SubCategoriesRoute } from "./subcategory.route";
import { userRouter } from "./user.route";

const router = express.Router();

/**Get status */
router.get("/status", (req: Request, res: Response) => {
  res.status(HttpStatusCode.OK).json({ status: "OK!" });
});

/**Auth APIs */
router.use("/auth", userRouter);

/**Category */
router.use("/category", CategoriesRoute);

/**Sub Category */
router.use("/subcategory", SubCategoriesRoute);

/**Brands APIs */
router.use("/brands", BrandsRoute);

/**Product APIs */
router.use("/products", ProductRoute);

export const api = router;
