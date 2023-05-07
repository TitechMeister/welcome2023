import { ImageList, ImageListItem, Button, Card, CardContent, CardHeader } from '@mui/material';
import img_1 from './img/1.png'

export default function Electronics() {
    return (
        <div className='close'>
            <Card>
                <CardHeader title="作業体験(電装)" />
                <CardContent>
                    <ImageList>
                        <ImageListItem key="1">
                            <img src={img_1} />
                        </ImageListItem>
                    </ImageList>
                    作業体験（電装）特設サイトを開きました。
                    <Button variant='outlined' href='https://titechmeister.github.io/Device-ATmega88_Board/'>詳しくはこちら</Button>
                </CardContent>
            </Card>
        </div>
    )
};