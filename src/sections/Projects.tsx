import { Box, Paper, Typography } from "@mui/material";
import { Suspense, useContext, useState } from "react";
import { myProjects, sectionTitleResponsiveSizes } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { Canvas } from "@react-three/fiber";
import Computer from "../components/Computer";
import { Center } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { AppContext } from "../components/AppContext";

const Projects = () => {
  const { isDarkMode } = useContext(AppContext);
  const [idxProject, setIdxProject] = useState(0);
  const currentProject = myProjects[idxProject];

  return (
    <Box id="projects" sx={{ p: 2, mt: 2 }}>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ fontSize: sectionTitleResponsiveSizes, mb: 4 }}
      >
        My Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: { sm: 700, md: "initial" },
          mx: "auto",
        }}
      >
        <ProjectCard // flex: 4
          data={currentProject}
          idx={idxProject}
          total={myProjects.length}
          setIdxProject={setIdxProject}
        />
        <Paper
          sx={{
            flex: 3,
            my: { xs: 2, md: 0 },
            ml: {md: 2},
            minHeight: 300,
            position: "relative",
          }}
        >
          <Canvas
            style={{ width: "100%", height: "100%", position: "absolute" }}
            camera={{ position: [0, 0, 10] }}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, -8, 5]} intensity={isDarkMode? 1 : 2.5} />
            <Suspense fallback={<CanvasLoader />}>
              <Center position={[-0.5, 1, 0]}>
                <Computer
                  texture={currentProject.texture}
                  scale={3.8}
                  rotation={[(10 * Math.PI) / 180, 0, 0]}
                />
              </Center>
            </Suspense>
          </Canvas>
        </Paper>
      </Box>
    </Box>
  );
};

export default Projects;
