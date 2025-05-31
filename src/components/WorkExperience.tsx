import { Box, Typography } from "@mui/material";
import { Work } from "../constants";
import React from "react";

const textSizes = { xs: "0.8em", sm: "1em" };
const titleSizes = { xs: "0.9em", sm: "1.3em" };

type Props = {
  data: Work;
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
};

const WorkExperience = ({ data, setAnimation }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        cursor: "pointer",
        "&:hover": { bgcolor: "#1F509A1F" },
      }}
      onPointerEnter={()=> setAnimation(data.animation)}
      onPointerLeave={()=> setAnimation("idle")}
    >
      <div >
        <Box
          component="img"
          src={data.icon}
          alt="company logo"
          sx={{ width: { xs: 40, sm: 60 } }}
        ></Box>
      </div>
      <Box sx={{ mx: 2 }}>
        <Typography variant="body1" fontSize={titleSizes}>
          {data.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={textSizes}
          gutterBottom
        >
          {data.pos}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={textSizes}
          gutterBottom
        >
          {data.descrip}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkExperience;
