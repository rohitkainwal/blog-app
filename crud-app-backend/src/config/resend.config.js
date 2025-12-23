import { Resend } from "resend";

// No need for dotenv here if loaded in main file
const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;