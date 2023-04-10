import { Typography, Card, CardHeader, CardContent } from '@mui/material';

export default function Tour() {
    return (
        <Card>
            <CardHeader title="作業場見学" />
            <CardContent>
                <Typography>
                    随時受付中 <br />
                    各班の作業体験・見学ができます。
                    Twitter（DM）、メール、または新歓Lineにご連絡ください。
                </Typography>
            </CardContent>
        </Card>
    )
};