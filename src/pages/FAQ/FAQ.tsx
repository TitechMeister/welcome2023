import * as React from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function FAQ() {
    return (
        <div className="Contact">
            <Typography variant='h4'>よくある質問</Typography>
            <Paper sx={{ margin: 2 }}>
                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> 活動頻度はどれくらいですか？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        所属する班によりますが、水曜の午後を中心に週3ぐらいです。大会前などは忙しくなります。 ※現在はコロナ禍のため活動頻度を落としています。
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> バイト・勉強との両立は出来ますか？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        はい、出来ます。先輩の多くはバイトをしていますし、更に他サークルの活動も楽しんでいる人もいます。
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> 全く知識がないんですが・・・
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        全然問題ありません。ほとんどの人が入った時点では全くの素人です。
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> 不器用だけど大丈夫かな？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        やる気があれば手先の器用さは問題になりません。
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> 他大生でも入れますか？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        もちろん！我々は誰でも歓迎しています！
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> 部員はどのくらいいるの？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        現在は、32人で活動しています。
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> Meisterってどこで活動しているの？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        主な活動は南2号館前の倉庫で行っています。詳しくはアクセスを参照してみてください。
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> 作業以外に何か楽しいことはありますか？
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        毎年春休みに旅行を企画しています。（コロナ禍のため実施しない場合もあります）
                    </Typography>
                </Item>

                <Item sx={{ padding: 2 }}>
                    <Chip label="Q" color="primary" /> もっと詳しい話を聞きたいんですが……。
                    <Divider />
                    <Typography variant="body1" padding={2} >
                        Mail:
                        <a href="meisterwelcome2021@gmail.com">
                            meisterwelcome2021@gmail.com
                        </a><br />
                        Twitter:
                        <a href="https://twitter.com/Meister_2023">
                            @Meister_2023
                        </a><br />
                        LINE:
                        <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">
                            Meister新歓
                        </a>
                    </Typography>
                </Item>

            </Paper>
        </div>
    )
}

export default FAQ
