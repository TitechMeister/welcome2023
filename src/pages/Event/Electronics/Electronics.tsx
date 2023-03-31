import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper, Button } from '@mui/material';
import img_1 from './img/1.png'

export default function Electronics() {
    return (
        <Paper sx={{ margin: 2 }} variant="outlined" square>
            <Typography variant='h5' padding={2}>作業体験(電装)</Typography>
            <ImageList>
                <ImageListItem key="1">
                    <img src={img_1} />
                </ImageListItem>
            </ImageList>
            <Typography padding={1}>
                作業体験（電装）特設サイトを開きました。
                <Button variant='outlined' href='https://titechmeister.github.io/Device-ATmega88_Board/'>詳しくはこちら</Button>
            </Typography>
        </Paper>
    )
};