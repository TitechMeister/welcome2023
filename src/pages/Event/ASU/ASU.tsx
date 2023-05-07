import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import img_3 from './img/3.jpg'

export default function ASU() {
    return (
        <div>
            <Card>
                <CardHeader title="ASU (Arena Set-Up)" />
                <CardContent>
                    <Typography>
                        5月6日深夜～5月7日朝 <br />
                        昨年の8月から、私たちは鳥人間コンテストに向けて機体を製作してきました。<br />
                        みんなで作った機体を初めて組み上げるのが、このASUです。<br/>
                        実際の機体を近くで見ることができる数少ない機会です！<br/>
                        興味ある方は前日までにTwitterまたはLINEで連絡してください。
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
        </div>
    )
};