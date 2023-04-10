import { ImageList, ImageListItem, Typography, Card, CardContent, CardHeader } from '@mui/material';
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import img_3 from './img/3.jpg'

export default function Drive() {
    return (
        <Card>
            <CardHeader title='駆動班' />

            <CardContent>
                <ImageList cols={3} gap={8} sx={{maxHeight:600}}>
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
                    駆動班はその名の通り動力伝達部を取り扱っています。我らがマイスターではチェーン式ではなくシャフトドライブ方式というものを取り入れているのですが…まあ、その話は入部して駆動班に入った人だけにしましょう。<br />
                    さて、駆動班の主な活動について紹介していきます。<br />
                    駆動班がすること、それは単純明快金属加工です。工作機械は旋盤、フライス盤などのみならず、ワイヤー放電加工、NCフライスなども扱います。また、チタンを切削出来るというのは他大の鳥人間サークルにも東工大の他ものつくりサークルにも無い特徴です！金属加工に興味があるけどやる機会が無いな～という人にも、金属加工を極めたい人にもオススメです！<br />
                    加工体験がしてみたいということがあればものつくりセンターで講習が行われているのでそちらを受講してみてください。
                </Typography>
            </CardContent>
        </Card>
    )
};