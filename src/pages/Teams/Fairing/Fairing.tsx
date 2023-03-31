import * as React from 'react';
import { ImageList, ImageListItem, Typography, Paper } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

export default function Fairing() {
    return (
        <Paper sx={{ margin: 2 }}>
            <Typography variant='h5' margin={2}>フェアリング班</Typography>

            <ImageList>
                <ImageListItem key="1">
                    <img src={img_1} />
                </ImageListItem>
                {/* <ImageListItem key="2">
                    <img src="/img/teams/fairing/2.jpg" />
                </ImageListItem> */}
            </ImageList>

            <Typography margin={1}>
                みなさん、こんにちは！東工大meisterフェアリング班です。フェアリングとは、人力飛行機のコクピットの外殻の部品です。パイロットを真夏の琵琶湖の日差しや強風から守り、快適なフライトを実現させるとともに、落下した際にパイロットを危険から守るという非常に重要な役割を担っています。<br />
                私たちmeisterのフェアリングは、発泡スチロールでの一体成型という形式をとっています。この形式をとっているのは人力飛行機をつくるサークル界隈でも非常に数が少なく、東工大meisterの技術力のなせる業と言っても過言でありません！　<br />
                主な作業は、発泡スチロールから熱線を用いて大体の部品の形を切り出し、それをスポンジやすりを用いて設計の形に近づけていく、というものです。発泡スチロールは加工がしやすいので、性別、体力問わずに十分に作業することできます！<br />
                さらに、フェアリングの設計も自分たちで行います！フェアリングの設計は、プロの設計をしている人も使っている超本格的なソフトを使って、空気の流れ、速度、パイロットの大きさ・パワーなどを考慮し、毎年一から設計しています！<br />
                フェアリング班のおおまかな紹介は以上です。このサークル全体にも言えますが、和気あいあいとしていて楽しいですよ！ぜひ私たちと一緒に「自分たちでつくった」カッコいい飛行機を飛ばしましょう！実物もあるのでぜひ見てみてね！
            </Typography>
        </Paper>
    )
};