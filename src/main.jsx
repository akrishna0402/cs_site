import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import {
	Contact,
	Events,
	Research,
	Programmes,
	Projects,
	Home,
	Alumini,
	People,
} from "./routes/index";
import SemTable from "./components/SemTable";
import Faculty from "./components/Faculty";
import ProgrammeNotice from "./components/ProgrammeNotice";
import EventData from "./components/EventData"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/programmes",
				element: <Programmes />,
				children: [
					{
						path: "ug/:ugId",
						element: <SemTable />,
					},
					{
						path: "pg",
						element: <ProgrammeNotice />,
					},
					{
						path: "phd",
						element: <ProgrammeNotice />,
					},
				],
			},
			{
				path: "/people",
				element: <People />,
				children: [
					{
						path: "faculty",
						element: <Faculty />,
					},
					{
						path: "staff",
						element: <Faculty />,
					},
					{
						path: "student",
						element: <Faculty />,
					},
				],
			},
			{
				path: "/research",
				element: <Research />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/alumini",
				element: <Alumini />,
			},
			{
				path: "/events",
				element: <Events />,
				children: [
					{
						path: "upcoming",
						element: <EventData />,
					},
					{
						path: "past",
						element: <EventData />,
					},
					{
						path: "talks",
						element: <EventData />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
