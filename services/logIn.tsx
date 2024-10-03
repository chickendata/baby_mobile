import axios from "@/customizeAxios/axios";

export const signin = (formData: any) => axios.post("/login", formData);

export const signup = (formData: any) => axios.post("/register/user", formData);
