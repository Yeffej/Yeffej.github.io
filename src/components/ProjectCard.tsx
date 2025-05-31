import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ProjectData } from "../constants";
import StreamIcon from "@mui/icons-material/Stream";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const Tag = styled("img")(({ theme }) => ({
  margin: "0 5px",
  cursor: "pointer",
  ...(theme.palette.mode === 'light') && {
    filter: "drop-shadow(2px 4px 6px black)",
  },
  [theme.breakpoints.up('xs')]: {
    width: 20,
  },
  [theme.breakpoints.up('sm')]: {
    width: 30,
  }
}));

const ArrowButton = styled(Button)(({ theme }) => ({
  minWidth: "auto", // restart default value = 64px
  width: "30px",
  height: "30px",
  padding: 0,
  borderRadius: "50%",
  boxShadow: "-2px 2px 4px 0px #000",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const PaginatorItem = styled("span")(() => ({
  display: "inline-block",
  margin: "0 5px",
  width: "7px",
  height: "7px",
  borderRadius: "50%",
}));

type Props = {
  data: ProjectData;
  idx: number; // index or page in the projects array.
  total: number; // total quantity of projects
  setIdxProject: React.Dispatch<React.SetStateAction<number>>;
};

const textSizes = {xs: ".8em", sm: "1em"};
const titleSizes = {xs: "1em", sm: "1.3em"};

const ProjectCard = ({ data, idx, total, setIdxProject }: Props) => {
  const { isDarkMode } = useContext(AppContext);
  const paginatorHighlightColor = isDarkMode? '#fff' : '#000';

  const handleBackProject = () =>
    setIdxProject((prevState) => (prevState <= 0 ? total - 1 : prevState - 1));
  const handleForwardProject = () =>
    setIdxProject((prevState) => (prevState >= total - 1 ? 0 : prevState + 1));

  return (
    <Card sx={{ flex: 4,  backgroundImage: `url(${data.spotlight})`}}>
      <CardHeader
        sx={{ mt: 1 }}
        avatar={
          <Box
            component={"img"}
            sx={{ width: {xs: 40, sm: 50}, p: 1, ...data.logoStyle }}
            src={data.logo}
            alt="project logo"
          />
        }
      />
      <CardContent sx={{ py: 0 }}>
        <Typography variant="body1" gutterBottom fontSize={titleSizes}>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom fontSize={textSizes}>
          {data.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom fontSize={textSizes}>
          {data.subdesc}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <div>
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} src={tag.path} />
            ))}
          </div>
          <div>
            <Link
              href={data.href}
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener"
              sx={{ fontSize: {xs: "0.7em", sm: "0.9em"}, display: "flex", alignItems: "center" }}
            >
              Check Live Site <StreamIcon fontSize="small" sx={{ ml: 0.5 }} />
            </Link>
          </div>
        </Box>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
      >
        <ArrowButton onClick={handleBackProject}>
          <ArrowBackIcon />
        </ArrowButton>
        <Box>
          {Array.from({ length: total }, (_, i) => (
            <PaginatorItem
              key={i}
              sx={{ backgroundColor: i == idx ? paginatorHighlightColor : "#666" }}
            />
          ))}
        </Box>
        <ArrowButton onClick={handleForwardProject}>
          <ArrowForwardIcon />
        </ArrowButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
