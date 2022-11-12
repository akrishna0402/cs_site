import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="bg-gray-200">
			<div className="z-10 flex flex-col justify-between fixed w-full top-0">
				<Header />
				<Navbar />
			</div>

			<div className="hide pt-[10rem] overflow-scroll h-screen">
				<Outlet />
			</div>
		</div>
	);
	return;
}

export default App;
