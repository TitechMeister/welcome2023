import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Frame() {
    return (
        <Card>
            <CardHeader title='P・フレーム班' />

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
                    フレーム班が主に作っているのはフェアリングの内側にあるコックピットの部分です。<br /> パイロットが座る椅子も作ることになります。<br />
                    フレームの一年生の作業は大体以下の通りとなるとおもいます。<br />
                    １.相管をする　桁同士がくっつくように桁を削ります。コピー用紙一枚分の隙間しか許容されない作業ですが、手先が器用だとすぐに終わります。<br />
                    ２.パテ盛り＆やすり　削った桁を接着して、まわりにパテを盛り、削ります。上の写真の桁接合部、白い部分がパテです。こっちは削る量が多いので相管よりはきついです。<br />
                    ３.オーバーレイ　パテの部分にエポ(接着剤)をひたしたカーボンシートを貼り付け強度を出します。ここまでくると完成型が見えてきます。<br />
                    あとはギアボボックス(←打ち間違えじゃない)などの小さめの物を作ったりします。<br />
                    フレーム班は作るものの都合上、直接飛行機の飛距離に関わるような役割ではないですが、いざ飛行機が落下したときパイロットの盾になるのはコックピットです。要はとっても大事な仕事です。また、全体設計もフレーム班には関与しないため、自由に設計することが出来ます。<br />
                    フレーム班は「締めるとこは締める、締めないところは締めない」をモットーに仲良く活動しています。興味を持っていただいたなら、ぜひフレームにお越しください。ゆるく歓迎します。
                </Typography>
            </CardContent>
        </Card>

    )
};