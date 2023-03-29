import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Event from './pages/Event';
import Links from './pages/Links';
import FAQ from './pages/FAQ';
import Interview from './pages/Interview'
import { Typography, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Access from './pages/Access';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const pages = [
  { title: 'トップ', elem: <Home />, url: '/welcome2023/' },
  { title: 'インタビュー', elem: <Interview />, url: 'interview' },
  { title: '班紹介', elem: <Teams />, url: 'teams' },
  { title: '新歓イベント', elem: <Event />, url: 'event' },
  { title: 'よくある質問', elem: <FAQ />, url: 'faq' },
  { title: 'アクセス', elem: <Access />, url: 'access' },
  { title: 'リンク', elem: <Links />, url: 'links' }
]


export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', padding: 2 }}>
      <img src="https://meister.ne.jp/welcome2023/logo_aqua.png" width={32} height={32} />
      <Divider />
      <List>
        {pages.map((item, idx) => (
          <ListItem key={item.title} disablePadding>
            <a href={item.url}>
              <ListItemButton sx={{ textAlign: 'center' }}> <ListItemText primary={item.title} /></ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant='h6' padding={1}>Meister2023</Typography>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {pages.map((item, idx) => (
                <a href={item.url} key={item.title}><Button key={item.title} sx={{ color: '#fff' }}>{item.title}</Button></a>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3}}>
          <Toolbar />
          <BrowserRouter basename='/welcome2023/'>
            <Routes>
              <Route key={"index"} index element={<Home />} />
              {pages.map((item) => {
                return <Route key={item.url} path={item.url} element={item.elem}></Route>;
              })}
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Box>
  );
}