import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Canvas, useFrame } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense, useEffect, useMemo, useRef } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants";

const BeamIcon = () => (
  <div className="beam-icon">
    <span></span>
    <span></span>
  </div>
);

const CameraDamping = ({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number; offset: number }>;
}) => {
  useFrame((state, dt) => {
    const { camera } = state;
    camera.position.x += (mouse.current.x * mouse.current.offset - camera.position.x) * dt;
    camera.position.y += (mouse.current.y * mouse.current.offset + 5 - camera.position.y) * dt;

    camera.lookAt(0, 0, 0);
  });
  return null;
};

const RoomExperience = () => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const sizes = useMemo(() => calculateSizes(xs, sm, md), [xs, sm, md]);

  const mouse = useRef({ x: 0, y: 0, offset: 15 });
  // const target = useRef({ x: 0, y: 4 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = -(e.clientX / window.innerWidth - 0.5);
      mouse.current.y = (e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", handleMouse);
    return () => window.removeEventListener("pointermove", handleMouse);
  }, []);

  return (
    <Canvas camera={{ position: [-100, 60, 15] }}>
      <Suspense fallback={<CanvasLoader />}>
        <HackerRoom
          scale={sizes.deskScale}
          position={sizes.deskPosition}
          // position={[0, -6, 0]}
          rotation={[0, Math.PI, 0]}
        />
      </Suspense>

      <CameraDamping mouse={mouse} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-4, 4, 10]} intensity={1} />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <Box
      component={"section"}
      sx={{
        pt: 2,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        position: "relative",
      }}
    >
      <Box
        sx={{ display: "flex", textAlign: "center", flexDirection: "column" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: { xs: "1.1em", sm: "1.4em", md: "1.7em" },
            color: "text.primary",
          }}
        >
          Hi! I'm Yefri &nbsp;
          <WavingHandIcon
            className="waving-hand"
            sx={{ fontSize: { xs: 20, sm: 30 } }}
          />
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "1.45em", sm: "2em", md: "2.4em" },
            color: "text.primary",
          }}
        >
          Software Developer & 3D Designer
        </Typography>
      </Box>
      <Box sx={{ width: 1, position: "absolute", inset: 0 }}>
        <RoomExperience />
        <Box
          sx={{
            width: 1,
            position: "absolute",
            bottom: 20,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            startIcon={<BeamIcon />}
            sx={{ width: 0.9, maxWidth: "400px" }}
            href="#contact"
          >
            Let's Work Together
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
