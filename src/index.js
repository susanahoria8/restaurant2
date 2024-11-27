const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productRoutes = require("./routes/products.routes");
const categoryRoutes = require("./routes/category.routes");

const app = express();

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(productRoutes);
app.use(categoryRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(4000, () => {
  console.log("Servidor UP");
});
