import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/useWindowWidth";

function App() {
	const { width } = useWindowSize();
	return (
		<div className="">
			<Header />
			{width >= 768 && (
				<div className="z-10 flex flex-col justify-between sticky w-full top-0">
					<Navbar />
				</div>
			)}

			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
	return;
}

export default App;
