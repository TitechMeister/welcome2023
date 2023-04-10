import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Contest() {
    return (
        <Card>
            <CardHeader title="模型飛行機コンテスト" />
            <CardContent>
                <Typography>
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
            </CardContent>
        </Card>
    )
};