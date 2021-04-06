import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { IContactForm } from "../../utils";

interface Request extends NextApiRequest {
  body: IContactForm;
}

const webhook = process.env.DISCORD_URL;

export default async function Disc(req: Request, res: NextApiResponse) {
  const { name, email, meName, message, phone } = req.body;

  if (meName || phone) {
    return res.end();
  }

  if (req.method !== "POST") {
    return res.status(404).send(`This route does not exist`);
  }
  if (!req.headers?.origin || !req.headers["sec-fetch-site"]) {
    return res.status(403).end();
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }
  if (!validator.isLength(name, { min: 5 })) {
    return res.status(400).json({ message: "Please type a bigger name" });
  }

  if (!validator.isLength(message, { min: 20 })) {
    return res.status(400).json({
      message: "Please type, at least, 20 characters in your message",
    });
  }
  try {
    await axios.post(webhook, {
      content: `@here:
      New message sent from the form input:
      **from**: ${name}:<${email}>
      **message**: ${message}`,
    });
    return res.json(true);
  } catch (error) {
    console.log("error:", error);
    console.log("error:", error.response);
    // console.log("error:", error);
    return res.status(500).end();
  }
}
