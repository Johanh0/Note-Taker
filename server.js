// DEPENDENCIES
const express = require("express");

// PORT SPCIFICITY
const PORT = process.env.PORT || 3001;

// INSTANCE OF SERVER
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
// DB JSON DATA
app.use(express.json());
// PUBLIC FOLDER DISPLAY
app.use(express.static("public"));

// ROUTES FOR SERVER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// CLI PORT
app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});