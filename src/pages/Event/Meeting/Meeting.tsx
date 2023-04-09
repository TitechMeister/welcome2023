import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'

export default function Meeting() {
    return (
        <Card>
            <CardHeader title="Zoom説明会" />
            <CardContent>
                <Typography>
                    4月15日21:00〜zoom説明会やります！参加希望の方はDMでご連絡ください！活動頻度、チームの雰囲気、入部手続き等々お伝え出来ればと思っております。
                    都合が合わないなどの反響がございましたら、第2回の開催も検討いたします！
                </Typography>
                <ImageList>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                </ImageList>
            </CardContent>
        </Card>
    )
};