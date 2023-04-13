import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home/Home';
import Teams from './pages/Teams/Teams';
import Event from './pages/Event/Event';
import Links from './pages/Links/Links';
import FAQ from './pages/FAQ/FAQ';
import Interview from './pages/Interview/Interview';
import Access from './pages/Access/Access';
import NotFound from './pages/NotFound';
import { Typography, createTheme, CssBaseline, ThemeProvider, Box, Divider, AppBar, List, ListItem, ListItemButton, Toolbar, IconButton, ListItemText, Drawer, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Timeline } from 'react-twitter-widgets';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ScrollRestoration, Link, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Admission from './pages/Admission/Admission';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const pages = [
  { title: 'トップ', element: <Home />, path: '/' },
  { title: 'インタビュー', element: <Interview />, path: '/interview' },
  { title: '班紹介', element: <Teams />, path: '/teams' },
  { title: '新歓イベント', element: <Event />, path: '/event' },
  { title: 'よくある質問', element: <FAQ />, path: '/faq' },
  { title: '入部方法', element: <Admission />, path: '/admission' },
  { title: 'アクセス', element: <Access />, path: '/access' },
  { title: 'リンク', element: <Links />, path: '/links' }
]


export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'))

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: "#0090F0"
          },
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
            <Link to={item.path}>
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

  const router = createBrowserRouter(
    [
      {
        path: '',
        element: <div>
          <AppBar component="nav" color='primary' enableColorOnDark>
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
              <Box sx={{ display: { xs: 'none', sm: 'block', flexGrow: 1 } }}>
                {pages.map((item, idx) => (
                  <Link key={item.path} to={item.path}>
                    <Button sx={{ color: '#fff' }}>
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton onClick={() => { setPrefersDarkMode(!prefersDarkMode) }}>
                {prefersDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
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
          <Outlet/>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'meister_2023'
            }}
            options={{
              height: "600",
              theme: prefersDarkMode ? "dark" : "light"
            }}
          />
          <ScrollRestoration/>
        </div>,
        children: pages,
        errorElement: <NotFound />
      }
    ],
    {
      basename: '/welcome2023/'
    }
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <RouterProvider router={router}></RouterProvider>
        </Box>

      </ThemeProvider>
    </Box>
  );
}