import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper } from '@mui/material';
import img_1 from './img/1.jpg'

export default function Electronics() {
    return (
        <Paper sx={{ margin: 2 }} variant="outlined" square>
            <Typography variant='h5' padding={2}>作業体験(電装)</Typography>
            <Typography padding={1}>
                決まり次第お知らせします <br />
            </Typography>
            <ImageList>
                <ImageListItem key="1">
                    <img src={img_1} />
                </ImageListItem>
            </ImageList>
        </Paper>
    )
};