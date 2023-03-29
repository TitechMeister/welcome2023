import * as React from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function Teams() {
    return (
        <div className="Teams">
            <Typography variant='h4' margin={2}>班紹介</Typography>
            <Stack>
                <Paper sx={{ margin: 2 }}>
                    <Typography variant='h5' margin={2}>翼班</Typography>

                    <ImageList>
                        <ImageListItem key="1">
                            <img src="/img/teams/wing/1.jpg" />
                        </ImageListItem>
                        <ImageListItem key="2">
                            <img src="/img/teams/wing/2.jpg" />
                        </ImageListItem>
                    </ImageList>

                    <Item>
                        <Chip label="Q1" color="primary" /> 翼班ってなに作ってるの～？？
                        <Divider />
                        <Typography variant="body1" padding={2} >
                            もちろん翼です！！30ｍ以上におよぶ主翼のほかに水平・垂直尾翼も作ってます
                        </Typography>
                    </Item>
                    <Item>
                        <Chip label="Q2" color="primary" /> 何人で翼を作ってるの？
                        <Divider />
                        <Typography padding={2} >
                            年によって変わりますが10人弱ぐらいです。一番人数が多い班です。
                        </Typography>
                    </Item>
                    <Item>
                        <Chip label="Q3" color="primary" /> 翼班内での役職とは？
                        <Divider />
                        <Typography padding={2} >
                            一年生の間は役職にかかわらず作業をします。自分たちが執行代になると次のような４つの役職に分かれます。<br />
                            ・主任 … 他班との調整や、製作スケジュールなどを管理する人<br />
                            ・チェッカー … 製作時の精度をチェックする重要職<br />
                            ・設計 … ＣＡＤを使って解析を行い、リブの間隔や肉抜き穴を決める人<br />
                            ・スライサー … 購入したスタイロ（リブに使っている青い発泡スチロールのようなもの）を、設計した厚さにスライスするプロフェッショナル
                        </Typography>
                    </Item>
                    <Item>
                        <Chip label="Q4" color="primary" /> 翼班の魅力は？
                        <Divider />
                        <Typography padding={2}  >
                            ・完成したときの達成感が壮大！<br />
                            ・作業環境が快適！（他班と違って翼班は冷暖房完備の講義室で作業してます。なので、新歓時期にあまり倉庫にいないかも…。）<br />
                            ・他の班に比べて班の構成人数が多い<br />
                            ・手先が器用になる！　　など
                        </Typography>
                    </Item>

                </Paper>


                <Divider />

                <Paper sx={{ margin: 2 }}>
                    <Typography variant='h5' margin={2}>プロペラ班</Typography>

                    <ImageList>
                        <ImageListItem key="3">
                            <img src="/img/teams/propeller/1.jpg" />
                        </ImageListItem>
                        <ImageListItem key="4">
                            <img src="/img/teams/propeller/2.jpg" />
                        </ImageListItem>
                    </ImageList>

                    <Typography paragraph={true} margin={1}>
                        プロペラ班の活動はその名の通りプロペラ周りの部品を作ることです。<br />
                        鳥人間コンテストには滑空機部門とプロペラ機部門がありますが、滑空機の飛距離がせいぜい500ｍ程度であるのに対し、プロペラ機は数キロから数十キロまで飛距離を伸ばします。その原動力となるのがプロペラです。精度を上げれば上げるほど飛距離の向上に貢献できるわかりやすい目標があります。
                        プロペラ班の扱う素材は結構幅広く、バルサ、CFRP（カーボン）、ガラス繊維、金属、パテなどがあります。<br />
                        プロペラ班の特徴は様々な素材を扱うことができ、プロペラの設計や金属加工など多くのことができるところです。ぜひ新歓に来てみてください。
                    </Typography>
                </Paper>

                <Divider />

                <Paper sx={{ margin: 2 }}>
                    <Typography variant='h5' margin={2}>P・フレーム班</Typography>

                    <ImageList>
                        <ImageListItem key="1">
                            <img src="/img/teams/frame/1.jpg" />
                        </ImageListItem>
                        <ImageListItem key="2">
                            <img src="/img/teams/frame/2.jpg" />
                        </ImageListItem>
                    </ImageList>

                    <Typography margin={1}>
                        フレーム班が主に作っているのはフェアリングの内側にあるコックピットの部分です。<br /> パイロットが座る椅子も作ることになります。<br />
                        フレームの一年生の作業は大体以下の通りとなるとおもいます。<br />
                        １.相管をする　桁同士がくっつくように桁を削ります。コピー用紙一枚分の隙間しか許容されない作業ですが、手先が器用だとすぐに終わります。<br />
                        ２.パテ盛り＆やすり　削った桁を接着して、まわりにパテを盛り、削ります。上の写真の桁接合部、白い部分がパテです。こっちは削る量が多いので相管よりはきついです。<br />
                        ３.オーバーレイ　パテの部分にエポ(接着剤)をひたしたカーボンシートを貼り付け強度を出します。ここまでくると完成型が見えてきます。<br />
                        あとはギアボボックス(←打ち間違えじゃない)などの小さめの物を作ったりします。<br />
                        フレーム班は作るものの都合上、直接飛行機の飛距離に関わるような役割ではないですが、いざ飛行機が落下したときパイロットの盾になるのはコックピットです。要はとっても大事な仕事です。また、全体設計もフレーム班には関与しないため、自由に設計することが出来ます。<br />
                        フレーム班は「締めるとこは締める、締めないところは締めない」をモットーに仲良く活動しています。興味を持っていただいたなら、ぜひフレームにお越しください。ゆるく歓迎します。
                    </Typography>
                </Paper>

                <Divider />

                <Paper sx={{ margin: 2 }}>
                    <Typography variant='h5' margin={2}>駆動班</Typography>

                    <ImageList>
                        <ImageListItem key="1">
                            <img src="/img/teams/drive/1.jpg" />
                        </ImageListItem>
                        <ImageListItem key="2">
                            <img src="/img/teams/drive/2.jpg" />
                        </ImageListItem>
                    </ImageList>

                    <Typography margin={1}>
                        駆動班はその名の通り動力伝達部を取り扱っています。我らがマイスターではチェーン式ではなくシャフトドライブ方式というものを取り入れているのですが…まあ、その話は入部して駆動班に入った人だけにしましょう。<br />
                        さて、駆動班の主な活動について紹介していきます。<br />
                        駆動班がすること、それは単純明快金属加工です。工作機械は旋盤、フライス盤などのみならず、ワイヤー放電加工、NCフライスなども扱います。また、チタンを切削出来るというのは他大の鳥人間サークルにも東工大の他ものつくりサークルにも無い特徴です！金属加工に興味があるけどやる機会が無いな～という人にも、金属加工を極めたい人にもオススメです！<br />
                        加工体験がしてみたいということがあればものつくりセンターで講習が行われているのでそちらを受講してみてください。
                    </Typography>
                </Paper>

                <Divider />

                <Paper sx={{ margin: 2 }}>
                    <Typography variant='h5' margin={2}>フェアリング班</Typography>

                    <ImageList>
                        <ImageListItem key="1">
                            <img src="/img/teams/fairing/1.jpg" />
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

                <Divider />

                <Paper sx={{ margin: 2 }}>
                    <Typography variant='h5' margin={2}>電装班</Typography>

                    <ImageList>
                        <ImageListItem key="1">
                            <img src="/img/teams/electronics/1.jpg" />
                        </ImageListItem>
                        <ImageListItem key="2">
                            <img src="/img/teams/electronics/2.jpg" />
                        </ImageListItem>
                    </ImageList>

                    <Typography margin={1}>
                        電操班は、機体の状態を測定・記録するための各種計測器や機体の姿勢や向きを操作する操舵機構を主に制作します。<br />
                        計測器の内容としては、機体の高度を測定する高度計、空中での速度を測定する対気速度計、プロペラの回転数を測る回転計、エンジン（パイロット）の馬力を測る出力計があります。そしてこれらが取得したデータを記録するロガーも制作します。<br />
                        操舵機構の制作ではカーボン板を作ることから始まり、サーボモーターの取り付けといったことを行い最終的にコックピットのコントローラーによって動作する尾翼を作ります。<br />
                        他にも他班が作業で用いる機器の修理・作成も行い幅広く活動します。電子工作の知識がなくても一から勉強できるようになっているので、興味がある人なら誰でも歓迎します！
                    </Typography>
                </Paper>
            </Stack>
        </div>
    )
}

export default Teams
