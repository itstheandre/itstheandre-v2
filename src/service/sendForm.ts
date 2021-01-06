import { IContactForm } from "../utils";
import validator from "validator";
import axios from "axios";
import { SuccessToastProps } from "../components";

interface ISendForm extends SuccessToastProps {
  showError?: boolean;
}
export const sendForm = async (e: IContactForm): Promise<ISendForm> => {
  if (e.meName || e.phone) {
    return {
      status: "error",
      showError: false,
    };
  }
  const isEmail = validator.isEmail(e.email);
  if (!isEmail) {
    return {
      status: "error",
      title: "Please type in a valid email",
      description: "The email you wrote is not a valid email",
      showError: true,
    };
  }
  if (!validator.isLength(e.name, { min: 5 })) {
    return {
      status: "error",
      title: "The name is too short",
      description: "The name field must have a minimum 5 characters",
      showError: true,
    };
  }
  if (!validator.isLength(e.message, { min: 20 })) {
    return {
      status: "error",
      title: "Message too short",
      description: "The message field must have a minumum of 20 characters",
      showError: true,
    };
  }
  try {
    const { data } = await axios.post("/api/disc", {
      message: e.message,
      name: e.name,
      email: e.email,
    });
    console.log("data:", data);
    return {
      status: "success",
      showError: false,
      description: "I'll try to get back to you as soon as possible",
      title: "Message successfully sent",
    };
  } catch (error) {
    return {
      status: "error",
      showError: true,
      description: "Something happened from my side, please try again later",
      title: "Message not sent",
    };
  }
};
