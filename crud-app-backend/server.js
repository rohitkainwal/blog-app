import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/config/database.config.js";

dotenv.config();
const PORT = process.env.PORT;
connectDB();

app.listen(PORT, (err) => {
  console.log('=== EMAIL CONFIGURATION ===');
console.log('NODEMAILER_EMAIL:', process.env.NODEMAILER_EMAIL);
console.log('NODEMAILER_HOST:', process.env.NODEMAILER_HOST);
console.log('NODEMAILER_PORT:', process.env.NODEMAILER_PORT);
console.log('NODEMAILER_SERVICE:', process.env.NODEMAILER_SERVICE);
console.log('===========================');
  try {
    console.log(`server is runnig at : ${PORT}`);
    console.log("JWT_SECRET_KEY exists:", !!process.env.JWT_SECRET_KEY);
    
  } catch (err) {
    console.log(err);
  }
});
