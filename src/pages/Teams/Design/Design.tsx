import { ImageList, ImageListItem, Typography, Card, CardContent, CardHeader } from '@mui/material';
import img_1 from './img/1.png'

export default function Design() {
    return (
        <Card>
            <CardHeader title='全体設計' />

            <CardContent>
                <ImageList>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                </ImageList>

                <Typography>
                全体設計とはその名前の通り人力飛行機の全体の設計をします。<br/>
                具体的には、翼のスパン（長さ）や翼型、機体の構造や機体の速度を決定して、琵琶湖で飛ぶのに最良の飛行機の設計をします。<br/>
                また、カーボンシートで自作する桁（飛行機の骨組み）の積層構成を決めたりもします。ほかのどの班に比べてもそれほど大きな制約はなく、自由度の高い活動ができます。
                全体設計の役割は設計だけではなく、各班の製作の統括をしたり、機体の組み立て試験や試験飛行の指揮をとったりもします。<br/>
                人力飛行機が好きな人だけでなく、航空力学などの専門的分野に興味のある人にもおすすめです。
                </Typography>
            </CardContent>
        </Card>
    )
};