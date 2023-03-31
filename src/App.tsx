import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home/Home';
import Teams from './pages/Teams/Teams';
import Event from './pages/Event/Event';
import Links from './pages/Links/Links';
import FAQ from './pages/FAQ/FAQ';
import Interview from './pages/Interview/Interview'
import NotFound from './pages/NotFound';
import { Typography, createTheme, CssBaseline, ThemeProvider, Box, Divider, AppBar, List, ListItem, ListItemButton, Toolbar, IconButton, ListItemText, Drawer, Button, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Access from './pages/Access/Access';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const pages = [
  { title: 'トップ', elem: <Home />, url: '/' },
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
            <Link to={item.url}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename='/welcome2023/'>
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
                  <Link key={item.url} to={item.url}>
                    <Button sx={{ color: '#fff' }}>
                      {item.title}
                    </Button>
                  </Link>
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
              <Routes>
                <Route key={"index"} index element={<Home />} />
                {pages.map((item) => {
                  return <Route key={item.url} path={item.url} element={item.elem}></Route>;
                })}
                <Route key="404" path="*" element={<NotFound />} />
              </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}