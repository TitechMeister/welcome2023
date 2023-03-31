import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Contest() {
    return (
        <Paper sx={{ margin: 2 }} variant="outlined" square>

            <Typography variant='h5' padding={2}>模型飛行機コンテスト</Typography>
            <Typography padding={1}>
                5月以降 @ Meister倉庫 <br />
                4,5人のグループに分かれて模型飛行機をつくり、その飛距離を競います。
            </Typography>
            <ImageList>
                <ImageListItem key="1">
                    <img src={img_1} />
                </ImageListItem>
                <ImageListItem key="2">
                    <img src={img_2} />
                </ImageListItem>
            </ImageList>
        </Paper>
    )
};