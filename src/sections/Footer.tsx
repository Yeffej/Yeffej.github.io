import { Box, Divider, Link, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

const fontSizes = { xs: "0.7em", sm: "0.8em", md: "0.9em" };
const imgSizes = { xs: 17, sm: 20, md: 25 };

const Footer = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div>
      <Divider />
      <Box
        component="footer"
        sx={{
          p: 2,
          pt: { xs: 3, sm: 4.5, md: 6 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > .MuiTypography-root": { fontSize: fontSizes, mx: 0.5 },
          }}
        >
          <Link
            href="https://github.com/adrianhajdin/threejs-portfolio"
            color="text.primary"
            target="_blank"
            rel="noopener"
          >
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              Inpired By JSM
            </Typography>
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link
            href="https://github.com/Yeffej/portfolio"
            color="text.primary"
            target="_blank"
            rel="noopener"
          >
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              Source Code
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            "& > .MuiLink-root": { mx: 0.5 },
          }}
        >
          <Link
            href="https://github.com/Yeffej"
            color="text.primary"
            target="_blank"
            rel="noopener"
          >
            <Box
              component="img"
              src="/assets/github.svg"
              alt="logo github"
              width={imgSizes}
              sx={isDarkMode? null : { background: "#000" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yefri-encarncaci%C3%B3n-jim%C3%A9nez-4882051aa/"
            color="text.primary"
            target="_blank"
            rel="noopener"
          >
            <Box
              component="img"
              src="/assets/linkedin.svg"
              alt="logo linkedin"
              width={imgSizes}
              sx={isDarkMode? { background: "#fff" } : null}
            />
          </Link>
          <Link
            href="https://x.com/YefriEncarnaci3?t=qBtM9toBcpONSC_pEBXqig&s=08"
            color="text.primary"
            target="_blank"
            rel="noopener"
          >
            <Box
              component="img"
              src="/assets/x.svg"
              alt="logo X / twitter"
              width={imgSizes}
              sx={{ background: "#fff" }}
            />
          </Link>
        </Box>

        <div>
          <Typography variant="body2" fontSize={fontSizes} color="text.primary">
            © {new Date().getFullYear()} Yefri Encarnación Portfolio.
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
