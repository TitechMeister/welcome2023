import * as React from 'react'
import { Box, Typography } from '@mui/material';
import img_top from './img/top.jpg'


let isLoadwidgets = false;
function Home() {
    React.useEffect(() => {
      if (!isLoadwidgets) {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.body.appendChild(s);
        isLoadwidgets = true;
      }
    }, []);

    return (
        <div className="Home">
            <Typography variant='h4' margin={2}>新歓ページへようこそ</Typography>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${24}px)` } }}>
                <img src={img_top} width="100%"></img>
                <Typography paragraph>
                    こんにちは！東京工業大学　Meister（マイスター）の新歓ページにようこそ。
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

                {/* Twitter */}
                    <h2>Twitter</h2>
                    <a
                        className="twitter-timeline"
                        data-theme="transparent"
                        href="https://twitter.com/Meister_2023?ref_src=twsrc%5Etfw"
                    ></a>
            </Box>
        </div>
    )
}

export default Home
