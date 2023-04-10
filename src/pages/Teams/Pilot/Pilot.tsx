import { ImageList, ImageListItem, Typography, Card, CardContent, CardHeader } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Pilot() {
    return (
        <Card>
            <CardHeader title='パイロット' />

            <CardContent>
                <ImageList cols={3} gap={8} sx={{ maxHeight: 600 }}>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_2} />
                    </ImageListItem>
                </ImageList>

                <Typography>
                    仲間が最高の機体を作り上げるように、自分自身をどこまでもチューンアップして最高のエンジンとなる。そして力の限りペダルを回し続けて、どこまでも機体を飛ばす。これがパイロットの使命です。部室にあるエルゴメーターやロードバイクなどを使って日々トレーニングに励みます。
                    併せて操舵の勉強なんかもします。ものつくりサークルにおいては少し変わったポジションです。・・・まあでも、身体だって「もの」だよね！集え、体力自慢。
                </Typography>
            </CardContent>
        </Card>
    )
};