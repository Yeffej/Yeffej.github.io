import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Collapse,
  Alert,
} from "@mui/material";
import { sectionTitleResponsiveSizes } from "../constants";
import ContactInputField from "../components/ContactInputField";
import { ChangeEventHandler, FormEventHandler, useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { AppContext } from "../components/AppContext";

type ContactData = {
  fullname: string;
  email: string;
  message: string;
};
const dataPlaceholder: ContactData = {
  fullname: "",
  email: "",
  message: "",
};

type SubmitState = {
  loading: boolean;
  error: boolean;
  success: boolean;
};
const submitStatePlaceholder: SubmitState = {
  loading: false,
  error: false,
  success: false,
};

const Contact = () => {
  const { isDarkMode } = useContext(AppContext)
  const [dataState, setDataState] = useState(dataPlaceholder);
  const [submitState, setSubmitState] = useState(submitStatePlaceholder);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: dataState.fullname,
      to_name: "Yefri",
      from_email: dataState.email,
      to_email: "yefri@yefftech.com",
      message: dataState.message,
    };
    setSubmitState((prev) => ({ ...prev, loading: true }));

    try {
      await emailjs.send(
        "service_o3r25oq",
        "template_reovit7",
        templateParams,
        {
          publicKey: "IBbdYmY8--DkT4rZd",
        }
      );

      setSubmitState((prev) => ({ ...prev, success: true }));
      setDataState(dataPlaceholder); // empty data fields for next messages!
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
      } else {
        console.log("ERROR:", err);
      }

      setSubmitState((prev) => ({ ...prev, error: true }));
    } finally {
      setSubmitState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDataState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      id="contact"
      sx={{
        my: 3,
        mx: { xs: 1, sm: "auto" },
        px: 2,
        py: 6,
        maxWidth: { sm: 700, md: 1000 },
        minHeight: "550px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={`/assets/${isDarkMode? 'terminal.webp' : 'terminal-white.webp'}`}
        alt="console terminal background"
        sx={{
          width: 1,
          height: 1,
          position: "absolute",
          inset: "-10px 0 0 0",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: { sm: 400, md: 550 },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h4"
            color="text.primary"
            sx={{ fontSize: sectionTitleResponsiveSizes, mb: 1 }}
          >
            Let's Talk
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontSize={{ xs: "0.8em", sm: "0.9em", md: "1em" }}
          >
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </Typography>
        </Box>
        <Collapse in={submitState.success || submitState.error}>
          <Alert
            severity={submitState.error ? "error" : "success"}
            onClose={() => setSubmitState(submitStatePlaceholder)}
            sx={{ mb: 2 }}
          >
            {submitState.error
              ? "Something went wrong while sending your message. Please refresh the page and try again. If the issue persists, contact me at yefri@yefftech.com."
              : "Your message have been sent!"}
          </Alert>
        </Collapse>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <ContactInputField
            name="fullname"
            id="fullname"
            variant="filled"
            label="Full Name"
            required
            value={dataState.fullname}
            onChange={handleChange}
          />
          <ContactInputField
            name="email"
            id="email"
            variant="filled"
            label="Email Address"
            required
            value={dataState.email}
            onChange={handleChange}
          />
          <ContactInputField
            name="message"
            id="message"
            variant="filled"
            label="Your Message"
            multiline
            rows={4}
            required
            value={dataState.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            endIcon={
              submitState.loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
          >
            {submitState.loading ? "Sending" : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
