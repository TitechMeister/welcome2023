import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Tour() {
    return (
        <Paper sx={{ margin: 2 }} variant="outlined" square>
            <Typography variant='h5' padding={2}>作業場見学</Typography>
            <Typography padding={1}>
                随時受付中 <br />
                各班の作業体験・見学ができます。
                Twitter（DM）、メール、または新歓Lineにご連絡ください。
            </Typography>
        </Paper>
    )
};