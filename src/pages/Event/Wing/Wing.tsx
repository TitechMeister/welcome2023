import { ImageList, ImageListItem, Typography, Card, CardHeader, CardContent } from '@mui/material';
import img_1 from './img/1.jpg'

export default function Wing() {
    return (
        <Card>
            <CardHeader title='作業体験(翼班)' />
            <CardContent>
                <Typography padding={1}>
                    決まり次第お知らせします <br />
                </Typography>
                <ImageList>
                    <ImageListItem key="1">
                        <img src={img_1} />
                    </ImageListItem>
                </ImageList>
            </CardContent>
        </Card>
    )
};