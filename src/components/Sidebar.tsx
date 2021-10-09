import React, { useEffect, useState } from "react";
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
	InfoRounded,
	HistoryRounded,
} from "@mui/icons-material";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import "../styles/Sidebar.css";
import Teampage from "./Teampage";
import Homepage from "./Homepage";

function Sidebar() {
	const [open, toggleDrawer] = useState(false);

	const list = () => (
		<Box>
			<List>
				<Link
					to="/"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Homepage"}>
						<ListItemIcon>
							<HomeRounded />
						</ListItemIcon>
						<ListItemText primary={"Homepage"} />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List>
				<Link
					to="/ourteam"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Our Team"}>
						<ListItemIcon>
							<PeopleRounded />
						</ListItemIcon>
						<ListItemText primary={"Our Team"} />
					</ListItem>
				</Link>
				<Link
					to="/ourmission"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Our Mission"}>
						<ListItemIcon>
							<InfoRounded />
						</ListItemIcon>
						<ListItemText primary={"Our Mission"} />
					</ListItem>
				</Link>
				<Link
					to="/devhistory"
					style={{ textDecoration: "none" }}
					onClick={() => toggleDrawer(!open)}
				>
					<ListItem button key={"Development History"}>
						<ListItemIcon>
							<HistoryRounded />
						</ListItemIcon>
						<ListItemText primary={"Development History"} />
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
				<TableRowsRounded sx={{ height: "50px", width: "50px" }} />
			</IconButton>
			<Drawer open={open} onClose={() => toggleDrawer(false)}>
				{list()}
			</Drawer>
		</div>
	);
}

export default Sidebar;
