import * as React from 'react'
import { Box, Typography, Card} from '@mui/material';

import img_top from './img/top.jpg'
import img_teams from './img/teams.jpg'
import img_event from './img/event.jpg'
import img_faq from './img/faq.jpg'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';


let isLoadwidgets = false;
function Home() {
    return (
        <div className="Home">
            <Typography variant='h4' margin={2}>新歓ページへようこそ</Typography>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${24}px)` } }}>

                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000}>
                    <Box component={"img"} src={img_top}></Box>
                    <Link to='/Teams'>
                        <Card>
                            <Box component={"img"} src={img_teams} />
                            <p className="legend">班紹介</p>
                        </Card>
                    </Link>
                    <Link to='/Event'>
                        <Card>
                            <Box component={"img"} src={img_event} />
                            <p className="legend">イベント情報</p>
                        </Card>
                    </Link>
                    <Link to='/FAQ'>
                        <Card>
                            <Box component={"img"} src={img_faq} />
                            <p className="legend">よくある質問</p>
                        </Card>
                    </Link>
                </Carousel>

                <Typography paragraph>
                    こんにちは！東京工業大学 Meister(マイスター)の新歓ページにようこそ。
                </Typography>
                <Typography paragraph>
                    Meisterは人力飛行機の制作を中心に活動をするものつくりサークルです。
                </Typography>
                <Typography paragraph>
                    人力飛行機部門は毎年夏に行われる鳥人間コンテスト(ディスタンス部門)で、どのチームがより多くの距離を飛び続けるか競っています。
                </Typography>
                <Typography paragraph>
                    飛行機づくりに興味がある人、大学で友人をつくりたい人、TVに出てみたい人。どんな人でも大歓迎です。東工大生はもちろん、他大学からの参加も歓迎しています。お気軽にメールでの質問、作業場へ見学にいらしてください。
                    みなさんの参加をお待ちしています。
                </Typography>
                <Typography paragraph>
                    私たちと、力をあわせて大きなものを完成させる感動を味わってみませんか？
                </Typography>
            </Box>
        </div>
    )
}

export default Home
