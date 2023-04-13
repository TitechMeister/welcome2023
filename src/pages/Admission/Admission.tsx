import { Button, Typography, Box, CssBaseline, ImageListItem, Card, CardHeader, CardContent, Alert, Stack } from '@mui/material';

function Admission() {
    return (
        <div className="Admission">
            <CssBaseline />
            <Stack spacing={2} margin={2}>
                <Typography variant='h4' margin={2}>入部方法</Typography>
                <Card>
                    <CardHeader title='1. Google Formで登録' />
                    <CardContent>
                        <Typography paragraph>
                            <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfWmLTvoghXkrdt5nZBaXhEW406MeQYweI29VWvjYB2sTchEQ/viewform' variant='outlined'>Google Form</Button>に学籍番号や名前などを入力し提出しましょう！　確認のメールが来るかチェックしてください！
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title='2. 対面で入部情報の照会' />
                    <CardContent>
                        <Typography paragraph>
                            倉庫に直接足を運んでいただき、入部フォームの照会と連絡先の登録を行ってもらいます！
                        </Typography>
                        <Alert severity='info' >倉庫に来られない場合は Meister 新歓公式LINEに登録した後、部員の指示に従って部内 Discord に入って貰います！</Alert>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title='3. Finish !'/>
                    <CardContent>
                        <Typography>
                            班所属の後いよいよ活動が始まります。　これから一緒に人力飛行機を作りましょう！
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </div>
    )
}

export default Admission
