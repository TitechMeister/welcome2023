import { Typography, Card, Stack, List, ListItem, Avatar } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';


const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function Links() {
    return (
        <div className="Links">
            <Typography variant='h4'>外部リンク</Typography>
            <List>
                <ListItem>
                    <Card sx={{ margin: 2 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'skyblue',bgcolor: 'white' }}>
                                <HomeIcon />
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://meister.ne.jp">ホームページ</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 2 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'blue',bgcolor: 'white' }}>
                                <TwitterIcon />
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://twitter.com/meister_2023">公式Twitter</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 2 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'red',bgcolor: 'white' }}>
                                <YouTubeIcon/>
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://www.youtube.com/user/Meistermovie">公式YouTube</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 2 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar  sx={{ color: 'black',bgcolor: 'white' }}>
                                <GitHubIcon/>
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://github.com/TitechMeister">Github</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card sx={{ margin: 2 }}>
                        <Stack direction="row" alignItems={'center'}>
                            <Avatar src="/img/logo/LINE_Brand_icon.png" sx={{ color: 'white',bgcolor: 'green' }}>
                                
                            </Avatar>
                            <Typography variant='h6' padding={2}><a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=722fzwlk">LINE</a></Typography>
                        </Stack>
                    </Card>
                </ListItem>
            </List>
        </div >
    )
}

export default Links
