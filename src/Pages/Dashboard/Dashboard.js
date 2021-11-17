import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Orders from '../Orders/Orders';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import NewWatchPackage from '../NewWatchPackage/NewWatchPackage';
import PostReview from './PostReview/PostReview';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import Payments from '../Payment/Payments';
import ManageProducts from '../ManageProducts/ManageProducts';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin,logOut} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />  
      <List>
          {
            !admin && <Box>
              <ListItem button key={'Pay'}>
                <Link style={{textDecoration:"none"}} to={`${url}/pay`}><ListItemText primary={'Pay'} /></Link>
              </ListItem>
              <ListItem button key={'myorder'}>
                <Link style={{textDecoration:"none"}} to={`${url}/orders`}><ListItemText primary={'My Orders'} /></Link>
              </ListItem>
              <ListItem button key={'review'}>
                <Link style={{textDecoration:"none"}} to={`${url}/postreview`}><ListItemText primary={'Review'} /></Link>
              </ListItem>
              <ListItem button key={'logOut'}>
                <Button onClick={logOut}><ListItemText primary={'LogOut'} /></Button>
              </ListItem>
            </Box>
          }
          {
            admin && <Box>
              <ListItem button key={'manageAllOrder'}>
                <Link style={{textDecoration:"none"}} to={`${url}/manageorder`}><ListItemText primary={'Manage All Order'} /></Link>
              </ListItem>
              <ListItem button key={'addNewWatch'}>
                <Link style={{textDecoration:"none"}} to={`${url}/addNewWatch`}><ListItemText primary={'Add New Watch'} /></Link>
              </ListItem>
              <ListItem button key={'manageAllOrder'}>
                <Link style={{textDecoration:"none"}} to={`${url}/MakeAdmin`}><ListItemText primary={'Make Admin'} /></Link>
              </ListItem>
              <ListItem style={{textDecoration:"none"}} button key={'manageproducts'}>
                <Link style={{textDecoration:"none"}} to={`${url}/manageproducts`}><ListItemText primary={'Manage Products'} /></Link>
              </ListItem>
              <ListItem style={{textDecoration:"none"}} button key={'logout'}>
                <Button onClick={logOut}><ListItemText primary={'LogOut'} /></Button>
              </ListItem>
            </Box>
          }   
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <NavLink variant="h6" noWrap style={{marginLeft: "20px", color: "white", textDecoration: "none"}} to='/home'>Home</NavLink>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h1>Welcome to DashBoard</h1>
        </Route>
        <PrivateRoute exact path={`${url}/postreview`}>
          <PostReview />
        </PrivateRoute>
        <PrivateRoute exact path={`${url}/pay`}>
          <Payments />
        </PrivateRoute>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
          <ManageProducts />
        </AdminRoute>
        <Route path={`${path}/orders`}>
          <Orders />
        </Route>
        <AdminRoute path={`${path}/manageorder`}>
          <ManageAllOrder />
        </AdminRoute>
        <AdminRoute path={`${path}/addNewWatch`}>
          <NewWatchPackage />
        </AdminRoute>
        
      </Switch>
      </Box>
      
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;