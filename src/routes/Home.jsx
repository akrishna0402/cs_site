import React, { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import Card from "../components/Card";
import HODCard from "../components/FacultyCard/hod";
import { galleryData } from "../utils/gallery.config";
import { liveEventsData } from "../utils/events.config";
import { liveNoticeData } from "../utils/sem.config";
import useWindowSize from "../hooks/useWindowWidth";

const Home = () => {
	const { width, height } = useWindowSize();

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (width <= 1024) setIsMobile(true);
		else setIsMobile(false);
	}, [width]);

	const news_settings = {
		dots: true,
		initialSlide: 0,
		className: "test",
		rows: 4,
		autoplay: true,
	};

	const events_settings = {
		dots: true,
		initialSlide: 0,
		rows: 2,
	};

	const photos_settings = {
		initialSlide: 3,
		rows: 1,
		slidesToShow: 1,
	};

	return (
		<div className="mb-4 p-3 flex gap-2 flex-col md:flex-row flex-wrap items-stretch justify-stretch pb-10">
			<div className={`card  ${width > 1000 ? "basis-[60%]" : "basis-full"}`}>
			<h1 className="text-xl md:text-2xl -mb-1 text-center font-bold">
					Gallery
				</h1>
				<Slider className="mt-2 max-h-[300px]" {...photos_settings}>
					{galleryData.map((i) => {
						return <img className="p-2 max-h-[300px]" src={i.imgUrl} key={i.id} />;
					})}
				</Slider>
			</div>
			<div className={`card ${width >= 1024 ? "basis-[39%]" : "basis-[48%]"}`}>
				<h2 className="font-bold text-xl md:text-2xl text-center">News Feed</h2>
				<Slider className="my-2 min-h-[200px]" {...news_settings}>
					{liveNoticeData.map((data) => {
						return <Card key={data.id} notice={data.notice} date={data.date} />;
					})}
				</Slider>
			</div>
			<div className={`card ${width > 1024 ? "basis-[50%]" : "basis-[50%]"}`}>
				<h2 className="font-bold text-2xl text-center">About Us</h2>
				<p className="mt-4">
					The Department started imparting instructions with the most modern
					curricula and syllabus to the students ofr undergraduate course since
					1991 and post graduate course since July, 2004. The Department
					maintains an excellent teaching/learning and research environment with
					dedicated, qualified and dynamic faculties and well equiped
					laboratories.
				</p>
				<p className="mt-2">
					The Department of Computer Science and Engineering (CSE) embodies the
					university's tradition of excellence in engineering education. CSE is
					in a period of exciting growth and opportunity. CSE Graduates capture
					leading academic appointments as well as opportunities in renowned
					computer industries.
				</p>
				<p className="my-2">
					The newly build second floor of the department includes highly
					sophisticated VLSI laboratory,Embedded Systems laboratory, Soft
					computing and Networking laboratories. Robotics, mobile communication,
					natural language processing are the broad areas into which the
					researchers have made a foray.
				</p>
			</div>
			<div className={`card ${width > 1024 ? "basis-[49%]" : "basis-[49%]"}`}>
				<h2 className="font-bold text-xl md:text-2xl text-center">
					Mission & Vision
				</h2>
				<p className="mt-4">
					Attaining global recognition in the area of Computer Science &
					Engineering through creating, applying and imparting scientific and
					technical education, research and training to meet the growing needs
					of the industry and society.
				</p>
				<ul className="my-2 pl-[17px] pt-[17px]">
					<li className="list-disc my-1">
						Imparting quality education through well-designed curriculum in tune
						with the challenging needs of the industry and society.
					</li>
					<li className="list-disc my-1">
						Providing state-of-art research facilities to generate knowledge and
						develop technologies in the thrust areas of Computer Science and
						Engineering.
					</li>
					<li className="list-disc my-1">
						Developing linkages with world class organizations to strengthen
						industry-academia relationships for mutual benefit.
					</li>
					<li className="list-disc my-1">
						To produce quality engineers, researchers and successful
						professionals who will become responsible citizens by contributing
						to the progress of the nation.
					</li>
				</ul>
			</div>
			<div
				className={`flex gap-2 ${
					width <= 1024 && width >= 768
						? "flex-row w-full justify-between items-center"
						: "basis-[33%] flex-col justify-between"
				}`}
			>
				{/* <div className="card w-full h-full">
					<h2 className="font-bold text-xl md:text-2xl text-center">
						Live Events
					</h2>
					{liveEventsData.length > 0 ? (
						<Slider className="my-2 min-h-[200px]" {...events_settings}>
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</Slider>
					) : (
						<div className="flex items-center justify-center h-full mt-4 md:mt-0 text-sm md:text-xl">
							No Current Live Events
						</div>
					)}
				</div> */}
				{/* <div className="w-full">
					<HODCard />
				</div> */}
			</div>
		</div>
	);
};

export default Home;
