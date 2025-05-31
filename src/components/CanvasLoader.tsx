import { Typography, Box } from "@mui/material"
import { Html, useProgress } from "@react-three/drei"
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { useContext } from "react";
import { AppContext } from "./AppContext";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number, isdarkmode: boolean },
) => {
  const { value, isdarkmode } = props;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {value !== 0 && <CircularProgress variant="determinate" {...props} />}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={isdarkmode? '#fff' : '#000'}
        >{value !== 0? `${value.toFixed(1)}%`: "Loading..."}</Typography>
      </Box>
    </Box>
  );
}

const CanvasLoader = () => {
  const { progress } = useProgress();
  const { isDarkMode } = useContext(AppContext);

  return (
    <Html as="div" center>
        <CircularProgressWithLabel value={progress} isdarkmode={isDarkMode} />
    </Html>
  )
}

export default CanvasLoader