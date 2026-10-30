import axios from "axios";
import { env } from "../config/env.js";

export const catalogClient = axios.create({ baseURL: env.catalogServiceUrl, timeout: 5000 });
export const paymentClient = axios.create({ baseURL: env.paymentServiceUrl, timeout: 5000 });
export const notificationClient = axios.create({ baseURL: env.notificationServiceUrl, timeout: 5000 });
