import * as React from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img_electronics_1 from './img/events/electronics_1.jpg'
import img_wing_1 from './img/events/wing_1.jpg'
import img_top_1 from './img/events/top_1.jpg'
import img_top_2 from './img/events/top_2.jpg'
import img_contest_1 from './img/events/contest_1.jpg'
import img_contest_2 from './img/events/contest_2.jpg'

function Event() {
    return (
        <div className="Event">
            <Typography variant='h4' padding={2}>新歓イベントの紹介</Typography>
            <ImageList>
                <ImageListItem key="1">
                    <img src={img_top_1} />
                </ImageListItem>
                <ImageListItem key="2">
                    <img src={img_top_2} />
                </ImageListItem>
            </ImageList>

            <Paper sx={{ margin: 2 }} variant="outlined" square>
                <Typography variant='h5' padding={2}>作業場見学</Typography>
                <Typography padding={1}>
                    随時受付中 <br />
                    各班の作業体験・見学ができます。
                    Twitter（DM）、メール、または新歓Lineにご連絡ください。
                </Typography>
            </Paper>

            <Paper sx={{ margin: 2 }} variant="outlined" square>
                <Typography variant='h5' padding={2}>作業体験(電装)</Typography>
                <Typography padding={1}>
                    決まり次第お知らせします <br />
                </Typography>
                <ImageList>
                    <ImageListItem key="1">
                    <img src={img_electronics_1} />
                    </ImageListItem>
                </ImageList>
            </Paper>
            <Paper sx={{ margin: 2 }} variant="outlined" square>
                <Typography variant='h5' padding={2}>作業体験(翼)</Typography>
                <Typography padding={1}>
                    決まり次第お知らせします <br />
                </Typography>
                <ImageList>
                    <ImageListItem key="1">
                    <img src={img_wing_1} />
                    </ImageListItem>
                </ImageList>
            </Paper>

            <Paper sx={{ margin: 2 }} variant="outlined" square>

                <Typography variant='h5' padding={2}>模型飛行機コンテスト</Typography>
                <Typography padding={1}>
                    5月以降 @ Meister倉庫 <br />
                    4,5人のグループに分かれて模型飛行機をつくり、その飛距離を競います。
                </Typography>
                <ImageList>
                    <ImageListItem key="1">
                        <img src={img_contest_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_contest_2} />
                    </ImageListItem>
                </ImageList>
            </Paper>
        </div>
    )
}

export default Event
