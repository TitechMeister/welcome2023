import { ImageList, ImageListItem, Typography, Card, CardContent, CardHeader } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import img_3 from './img/3.png'

export default function Electronics() {
    return (
        <Card>
            <CardHeader title='電操班' />

            <CardContent>
                <ImageList cols={3} gap={8}>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_2} />
                    </ImageListItem>
                    <ImageListItem key="3">
                        <img src={img_3} />
                    </ImageListItem>
                </ImageList>

                <Typography>
                    電操班は、機体の状態を測定・記録するための各種計測器や機体の姿勢や向きを操作する操舵機構を主に制作します。<br />
                    計測器の内容としては、機体の高度を測定する高度計、空中での速度を測定する対気速度計、プロペラの回転数を測る回転計、エンジン（パイロット）の馬力を測る出力計があります。そしてこれらが取得したデータを記録するロガーも制作します。<br />
                    操舵機構の制作ではカーボン板を作ることから始まり、サーボモーターの取り付けといったことを行い最終的にコックピットのコントローラーによって動作する尾翼を作ります。<br />
                    他にも他班が作業で用いる機器の修理・作成も行い幅広く活動します。電子工作の知識がなくても一から勉強できるようになっているので、興味がある人なら誰でも歓迎します！
                </Typography>
            </CardContent>
        </Card>
    )
};