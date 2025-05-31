import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Snackbar,
  styled,
  SnackbarCloseReason,
} from "@mui/material";
import { contactEmail, sectionTitleResponsiveSizes } from "../constants";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Earth from "../components/Earth";

const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "1fr",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  gridAutoRows: "minmax(80px, auto)",
  gap: 20,
}));

const GridItem = styled("div")(() => ({}));

const GridCard = styled(Card)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const About = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleCopy = (text = "") => {
    navigator.clipboard.writeText(text);
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <Box id="about" sx={{ mt: 2, p: 2 }}>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ mb: 4, fontSize: sectionTitleResponsiveSizes }}
      >
        About Me
      </Typography>
      <GridContainer>
        <GridItem>
          <GridCard>
            <CardMedia
              component="img"
              image="/assets/grid1.webp"
              sx={{ width: 1, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Hi, I'm Yefri Encarnación
              </Typography>
              <Typography variant="body2" color="text.secondary">
                With almost 4 years of professional experience, specializing in
                designing, developing, and maintaining web applications.
                Actively seeking opportunities to contribute my expertise in software
                development and deliver impactful digital solutions
              </Typography>
            </CardContent>
          </GridCard>
        </GridItem>
        <GridItem>
          <GridCard>
            <CardMedia
              component="img"
              image="/assets/grid2.webp"
              sx={{ width: 1, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Tech Stack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications.
              </Typography>
            </CardContent>
          </GridCard>
        </GridItem>
        <GridItem  sx={{ gridRow: { md: "1/3" },  overflow: "hidden" }}>
          <GridCard>
            <Box id="EarthHolder">
              <Earth />
            </Box>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                I'm very flexible with time zone communications & locations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I'm based in Dominican Republic, San Cristobal and open to
                remote work worldwide.
              </Typography>
            </CardContent>
          </GridCard>
        </GridItem>
        <GridItem sx={{ gridColumn: { md: "1/3" }, gridRow: { md: "2/4" } }}>
          <GridCard>
            <CardMedia
              component="img"
              image="/assets/grid3.webp"
              sx={{ width: 1, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                My Passion for Coding
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I love solving problems and building things through code.
                Programming isn't just my profession—it's my passion. I enjoy
                exploring new technologies, and enhancing my skills.
              </Typography>
            </CardContent>
          </GridCard>
        </GridItem>
        <GridItem>
          <GridCard>
            <CardMedia
              component="img"
              image="/assets/grid4.webp"
              sx={{ width: 1, maxHeight: 150, objectFit: "fill" }}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={{ xs: "1em", sm: "1.2em", md: "1.4em" }}
                align="center"
                gutterBottom
              >
                Contact Me
              </Typography>
              <Typography
                variant="body1"
                fontSize={{ xs: "1.1em", sm: "1.3em", md: "1.5em" }}
                align="center"
              >
                <IconButton
                  onClick={() => handleCopy(contactEmail)}
                  aria-label="copy"
                  className="click-animated"
                >
                  <ContentCopyIcon />
                </IconButton>{" "}
                {contactEmail}
              </Typography>
              <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                message="Copied to clipboard"
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleCloseSnackBar}
                  >
                     <CloseIcon fontSize="small" />
                  </IconButton>
                }
              />
            </CardContent>
          </GridCard>
        </GridItem>
      </GridContainer>
    </Box>
  );
};

export default About;
