import * as React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import Tour from './Tour/Tour';
import Electronics from './Electronics/Electronics';
import Wing from './Wing/Wing';
import Contest from './Contest/Contest';

function Event() {
    return (
        <div className="Event">
            <Typography variant='h4' padding={2}>新歓イベントの紹介</Typography>
            <ImageList>
                <ImageListItem key="1">
                    <img src={img_1} />
                </ImageListItem>
                <ImageListItem key="2">
                    <img src={img_2} />
                </ImageListItem>
            </ImageList>
            <Stack>
                <Divider />
                <Tour />
                <Divider />
                <Electronics />
                <Divider />
                <Wing />
                <Divider />
                <Contest />
            </Stack>
        </div>
    )
}

export default Event