import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10, // Adjust height if needed
          borderRadius: 5, // Rounded corners
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'white', // Color of the progress bar
          },
        }}
      />
    </Box>
  );
}
