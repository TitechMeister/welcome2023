import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Box width={window.innerWidth*0.9} sx={{textAlign:'center',padding:12}}>
        <Typography margin={2}>お探しのページは存在しません。</Typography>
        <Link to='/'>
          <Button variant="outlined"><Typography align='center'>新歓サイトはこちらから</Typography></Button>
        </Link>
      </Box>
    </React.Fragment>
  )
};