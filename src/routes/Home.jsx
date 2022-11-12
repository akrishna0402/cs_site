import React from "react";
import Slider from "infinite-react-carousel";
import Card from "../components/Card";
import FacultyCard from "../components/FacultyCard";

const Home = () => {
	const settings = {
		dots: true,
		initialSlide: 0,
		rows: 4,
	};
	return (
		<div className="flex flex-wrap">
			<div className="m-3">
				<div className={`card`}>
					<h2 className="font-bold text-2xl">About Us</h2>
					<p className="mt-4">
						The Department started imparting instructions with the most modern
						curricula and syllabus to the students ofr undergraduate course
						since 1991 and post graduate course since July, 2004. The Department
						maintains an excellent teaching/learning and research environment
						with dedicated, qualified and dynamic faculties and well equiped
						laboratories.
					</p>
					<p className="mt-2">
						The Department of Computer Science and Engineering (CSE) embodies
						the university's tradition of excellence in engineering education.
						CSE is in a period of exciting growth and opportunity. CSE Graduates
						capture leading academic appointments as well as opportunities in
						renowned computer industries.
					</p>
					<p className="my-2">
						The newly build second floor of the department includes highly
						sophisticated VLSI laboratory,Embedded Systems laboratory, Soft
						computing and Networking laboratories. Robotics, mobile
						communication, natural language processing are the broad areas into
						which the researchers have made a foray.
					</p>
				</div>
			</div>
			<div className="m-3 flex-grow">
				<div className="card">
					<h2 className="font-bold text-2xl text-center">News Feed</h2>
					<Slider className="my-2 min-h-[200px]" {...settings}>
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
				</div>
			</div>
			<div className="m-3">
				<div className={`card`}>
					<h2 className="font-bold text-2xl">Mission & Vision</h2>
					<p className="mt-4">
						Attaining global recognition in the area of Computer Science &
						Engineering through creating, applying and imparting scientific and
						technical education, research and training to meet the growing needs
						of the industry and society.
					</p>
					<ul className="my-2 pl-[17px] pt-[17px]">
						<li className="list-disc my-1">
							Imparting quality education through well-designed curriculum in
							tune with the challenging needs of the industry and society.
						</li>
						<li className="list-disc my-1">
							Providing state-of-art research facilities to generate knowledge
							and develop technologies in the thrust areas of Computer Science
							and Engineering.
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
			</div>
			<FacultyCard name="SN" designation="HOD"
				experise = {
					<ul>
						<li className="list-disc">Sensor Network</li>
					</ul>
				}
			 joinYear={2020} image="https://nitdgp.ac.in/uploads/userfiles/images/Subrata_Nandi.jpg"/>
		</div>
	);
};

export default Home;
