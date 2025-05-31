import { Box, Paper, Typography } from "@mui/material";
import { sectionTitleResponsiveSizes, workExperiences } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Myself } from "../components/Myself";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { Suspense, useContext, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import WorkExperience from "../components/WorkExperience";
import { AppContext } from "../components/AppContext";

const Experience = () => {
  const { isDarkMode } = useContext(AppContext);
  const [animation, setAnimation] = useState("idle");

  return (
    <Box
      id="work"
      sx={{
        mt: 2,
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ fontSize: sectionTitleResponsiveSizes, mb: 2 }}
      >
        My Work Experience
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          "& > .MuiPaper-root": {
            minHeight: { xs: 200, sm: 400 },
            minWidth: 280,
            my: 1,
          },
        }}
      >
        <Paper sx={{ flex: 2, mr: { sm: 2 }, position: "relative" }}>
          <Canvas
            style={{ width: "100%", height: "100%", position: "absolute" }}
            camera={{ position: [0, 0, 10] }}
          >
            <ambientLight intensity={isDarkMode? 0.5 : 2} />
            <SpotLight
              position={[0, 8, 0]}
              intensity={isDarkMode? 1 : 5}
              distance={15}
              angle={Math.PI / 2}
              // anglePower={1}
            />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={<CanvasLoader />}>
              <Myself
                animationName={animation}
                scale={5.5}
                position={[0, -5, 0]}
              />
            </Suspense>
          </Canvas>
        </Paper>
        <Paper sx={{ flex: 4 }}>
          {workExperiences.map((data) => (
            <WorkExperience
              key={data.id}
              data={data}
              setAnimation={setAnimation}
            />
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default Experience;
