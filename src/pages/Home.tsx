import React from "react";
import "./home.scss";
import {AppBar, Box, Toolbar, Typography, Paper, Button, IconButton,  Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText, Link} from '@mui/material';
import {Menu as MenuIcon, Mail as MailIcon, Directions as DirectionIcon} from '@mui/icons-material';
import config from '../config.json';
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import Carousel from 'react-material-ui-carousel';
import SimpleMap from "../components/SimpleMap";

const menus = [
	{
		title: "Contact US",
		url: config.contact,
		icon: <MailIcon sx={{ 
			color: "#88b06a",
			'&:hover':{
				color: '#79876e',
			}
		  }} />
	},
	{
		title: "Get Directory",
		url: config.directory,
		icon: <DirectionIcon sx={{ 
			color: "#88b06a",
			'&:hover':{
				color: '#79876e',
			}
		  }} />
	}
];

const images = [
	image1,
	image2,
	image3
]

const Home = () => {
	const [state, setState] = React.useState({
		left: false,
	});
	const toggleDrawer = (open: boolean) => {
      	setState({ ...state, left: open });
    };

	return (
		<>
			<header>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="sticky" style={{backgroundColor:'white'}}>
						<Toolbar>
						<IconButton
							size="large"
							edge="start"
							style={{color:'#88b06a'}}
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={()=>toggleDrawer(true)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<a href="/coffee" className="small-title">Corvo Coffee</a>
						</Typography>
						<div className="menubar" style={{display: 'flex', gap: '1em'}}>
							{menus.map((i, k)=>(
								<Link className="cmd" key={k} href={i.url} style={{display: 'flex', alignItems: 'center', gap: '0.5em', textDecoration:'none'}}>
									{i.icon}
									<Typography>
									<a href="/coffee" className="header-letter">{i.title}</a>	
									</Typography>
								</Link>
							))}
						</div>
						
						</Toolbar>
					</AppBar>
				</Box>
			</header>
			<div className="main-padding">
				<main>
					<div className="item-margin">
						<React.Fragment>
							<Drawer anchor="left" open={state.left} onClose={()=>toggleDrawer(false)} >
								<Box sx={{ width: 250 }} role="presentation" onClick={()=>toggleDrawer(false)} >
									<List>
										{menus.map((i, k) => (
											<ListItem key={k} disablePadding>
												<ListItemButton>
													<a href={i.url} style={{display: 'flex', alignItems: 'center'}}>
														<ListItemIcon>
															{i.icon}
														</ListItemIcon>
														<ListItemText primary={i.title} />
													</a>
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</Box>
							</Drawer>
						</React.Fragment>
						<div id="details" className="d-column middle gap2">
							<p className="title mt3">Corvo Coffee</p>
							<div className="d-column middle">
								<p>Cafe in New York</p>
								<p>Open today until 7:00 PM</p>
							</div>
							<button className="default-btn mb3">CONTACT US</button>
							<div className="carousel">
								<Carousel>
									{images.map((i, k) => <img key={k} src={i} alt={`image${i}`} />)}
								</Carousel>
							</div>
						</div>
						<div className="d-column middle" style={{width:'100%'}}>
							<hr className="m1 mt3" style={{width:'70px',height:'4px',backgroundColor:'black'}} />
						</div>
						<h4 style={{textAlign:'center'}}>CONTACT US</h4>
						<SimpleMap />
						<div className="row p1">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 sm-center">
								<p className="mt2 mb2" style={{fontSize:'20px',fontWeight:'500'}}>Address</p>
								<button className="default-btn">Get directions</button>
								<div className="mt2">
									<p>542 9th Avenue</p>
									<p>New York, NY 10018</p>
									<p>USA</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 sm-center">
								<p className="mt2 mb2" style={{fontSize:'20px',fontWeight:'500'}}>Business Hours</p>
								<div className="row center middle" style={{width:'220px'}}>
									<div className="col-4">
										<p>Mon:</p>
										<p>Tue:</p>
										<p>Wed:</p>
										<p>Thu:</p>
										<p>Fri:</p>
										<p>Sat:</p>
										<p>Sun:</p>
									</div>
									<div className="col-8">
										<p>6:00 AM – 7:00 PM</p>
										<p>6:00 AM – 7:00 PM</p>
										<p>6:00 AM – 7:00 PM</p>
										<p>6:00 AM – 7:00 PM</p>
										<p>6:00 AM – 7:00 PM</p>
										<p>6:00 AM – 7:00 PM</p>
										<p>6:00 AM – 7:00 PM</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer className="mt3 mb3">
					<div className="item-margin">
						<hr style={{width:'100%'}}/>
						<div className="d-row between middle mt2">
							<a className="text-gray" href="/report">Report abuse</a>
							<a className="text-gray" href="photo">Header photo by Dino Rodriguez</a>
							<div className="d-wrap">
								<span className="text-gray">Powered by </span>
								<a className="text-gray" href="google" style={{fontSize:'20px'}}> Google</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Home;