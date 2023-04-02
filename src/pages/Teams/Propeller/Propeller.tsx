import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Propeller() {
    return (
        <Card>
            <CardHeader title='プロペラ班' />

            <CardContent>
                <ImageList>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_2} />
                    </ImageListItem>
                </ImageList>

                <Typography>
                    プロペラ班の活動はその名の通りプロペラ周りの部品を作ることです。<br />
                    鳥人間コンテストには滑空機部門とプロペラ機部門がありますが、滑空機の飛距離がせいぜい500ｍ程度であるのに対し、プロペラ機は数キロから数十キロまで飛距離を伸ばします。その原動力となるのがプロペラです。精度を上げれば上げるほど飛距離の向上に貢献できるわかりやすい目標があります。
                    プロペラ班の扱う素材は結構幅広く、バルサ、CFRP（カーボン）、ガラス繊維、金属、パテなどがあります。<br />
                    プロペラ班の特徴は様々な素材を扱うことができ、プロペラの設計や金属加工など多くのことができるところです。ぜひ新歓に来てみてください。
                </Typography>
            </CardContent>
        </Card>
    )
};