import { TextField, TextFieldProps } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "./AppContext"

const fsizes = { xs: "0.85em", sm: "1em" }

const ContactInputField = (props: TextFieldProps) => {
  const  { isDarkMode } = useContext(AppContext);
  return (
    <TextField
      variant="filled"
      size="small"
      {...props}
      sx={{
        '& .MuiFilledInput-root': {
          backgroundColor: isDarkMode? '#1C1C1E':  '#E3E3E1',
          boxShadow: "0px 3px 8px 1px #0008"
        },
        '& .MuiFilledInput-root input': {
            fontSize: fsizes
        },
        '& .MuiFilledInput-root::before': {
          border: "none"
        },
        '& .MuiFilledInput-root::after': {
          borderColor: "primary.light"
        },
        '& .MuiInputLabel-root': {
          fontSize: fsizes,
          color: 'primary.light',
        },
        my: 1,
        ...props.sx, // Allow additional styling
      }}
    />
  )
}

export default ContactInputField