import { ImageList, ImageListItem, Typography, Card, CardContent, CardHeader, Stack } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'

import QACard from '../../../common/QACard';

export default function Wing() {
    return (
        <Card>
            <CardHeader title='翼班' />

            <CardContent>
            <ImageList cols={3} gap={8}>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                    <ImageListItem key="2">
                        <img src={img_2} />
                    </ImageListItem>
                </ImageList>

                <Stack spacing={2}>
                    <QACard question='翼班ってなに作ってるの～？？'>
                        <Typography variant="body1" padding={2} >
                            もちろん翼です！！30ｍ以上におよぶ主翼のほかに水平・垂直尾翼も作ってます
                        </Typography>
                    </QACard>

                    <QACard question='何人で翼を作ってるの？'>
                        <Typography padding={2} >
                            年によって変わりますが10人弱ぐらいです。一番人数が多い班です。
                        </Typography>
                    </QACard>

                    <QACard question='翼班内での役職とは？'>
                        <Typography padding={2} >
                            一年生の間は役職にかかわらず作業をします。自分たちが執行代になると次のような４つの役職に分かれます。<br />
                            ・主任 … 他班との調整や、製作スケジュールなどを管理する人<br />
                            ・チェッカー … 製作時の精度をチェックする重要職<br />
                            ・設計 … ＣＡＤを使って解析を行い、リブの間隔や肉抜き穴を決める人<br />
                            ・スライサー … 購入したスタイロ（リブに使っている青い発泡スチロールのようなもの）を、設計した厚さにスライスするプロフェッショナル
                        </Typography>
                    </QACard>

                    <QACard question='翼班の魅力は？'>
                        <Typography padding={2}  >
                            ・完成したときの達成感が壮大！<br />
                            ・作業環境が快適！（他班と違って翼班は冷暖房完備の講義室で作業してます。なので、新歓時期にあまり倉庫にいないかも…。）<br />
                            ・他の班に比べて班の構成人数が多い<br />
                            ・手先が器用になる！　　など
                        </Typography>
                    </QACard>
                </Stack>

            </CardContent>

        </Card>
    )
};