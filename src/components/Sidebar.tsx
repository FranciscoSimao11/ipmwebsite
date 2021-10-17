import React, { useState } from "react";
import {
	Drawer,
	IconButton,
	Box,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import {
	TableRowsRounded,
	HomeRounded,
	PeopleRounded,
	SportsSoccerRounded,
	HistoryRounded,
} from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
	const [open, toggleDrawer] = useState(false);
	const textColor = "rgba(0, 0, 0, 0.7)";
	const list = () => (
		<Box>
			<List>
				<Link
					to="/ipmwebsite/"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Homepage"}>
						<ListItemIcon>
							<HomeRounded />
						</ListItemIcon>
						<ListItemText primary={"Homepage"} sx={{ color: textColor }} />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List>
				<Link
					to="/ipmwebsite/ourteam"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Our Team"}>
						<ListItemIcon>
							<PeopleRounded />
						</ListItemIcon>
						<ListItemText primary={"Our Team"} sx={{ color: textColor }} />
					</ListItem>
				</Link>
				<Link
					to="/ipmwebsite/ourgoal"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Our Goal"}>
						<ListItemIcon>
							<SportsSoccerRounded />
						</ListItemIcon>
						<ListItemText primary={"Our Goal"} sx={{ color: textColor }} />
					</ListItem>
				</Link>
				<Link
					to="/ipmwebsite/devhistory"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Development History"}>
						<ListItemIcon>
							<HistoryRounded />
						</ListItemIcon>
						<ListItemText
							primary={"Development History"}
							sx={{ color: textColor }}
						/>
					</ListItem>
				</Link>
			</List>
		</Box>
	);

	return (
		<div style={{ color: "white" }}>
			<IconButton
				color="inherit"
				onClick={() => toggleDrawer(!open)}
				sx={{ marginLeft: "5px", marginTop: "5px" }}
			>
				<MenuIcon sx={{ height: "50px", width: "50px" }} />
			</IconButton>
			<Drawer open={open} onClose={() => toggleDrawer(false)}>
				{list()}
			</Drawer>
		</div>
	);
}

export default Sidebar;
