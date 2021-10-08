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

function Sidebar() {
	const [open, toggleDrawer] = useState(false);

	const list = () => (
		<Router>
			<Box>
				<List>
					<ListItem button key={"Homepage"}>
						<ListItemIcon>
							<HomeRounded />
						</ListItemIcon>
						<ListItemText primary={"Homepage"} />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button key={"Our Team"}>
						<ListItemIcon>
							<PeopleRounded />
						</ListItemIcon>
						<ListItemText primary={"Our Team"} />
					</ListItem>
					<ListItem button key={"Our Mission"}>
						<ListItemIcon>
							<InfoRounded />
						</ListItemIcon>
						<ListItemText primary={"Our Mission"} />
					</ListItem>
				</List>
			</Box>
		</Router>
	);

	return (
		<div style={{ color: "white", marginLeft: 10 }}>
			<IconButton
				color="inherit"
				size="large"
				onClick={() => toggleDrawer(!open)}
			>
				<TableRowsRounded />
			</IconButton>
			<Drawer open={open} onClose={() => toggleDrawer(false)}>
				{list()}
			</Drawer>
		</div>
	);
}

export default Sidebar;
