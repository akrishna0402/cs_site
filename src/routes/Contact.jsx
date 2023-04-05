import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import useWindowSize from "../hooks/useWindowWidth";

const Contact = () => {
	
	const { width } = useWindowSize();
	let wi = width < 600 ? `100%` : `600px`;
	return (
		<div className="card mx-5 h-[65%] mt-5 flex flex-col md:flex-row items-center justify-stretch rounded-xl">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5447698663756!2d87.29047321490069!3d23.548870284689105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f77207f3cbffe9%3A0xb3e8a1e1089b8bf8!2sCSE%20Department%2C%20NIT%20Durgapur!5e0!3m2!1sen!2sin!4v1668415574666!5m2!1sen!2sin"
				width={wi}
				height="450"
				style={{
					border: "1px solid black",
					borderRadius: "10px",
				}}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<div className="mx-5 p-5 flex flex-col h-[30rem] items-start justify-center">
				<div>
					<h1 className="text-2xl font-bold">
						National Institute of Technology, Durgapur
					</h1>
					<p>Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209</p>
				</div>
				<div className="mt-10 mb-10">
					<div className="flex items-center gap-2">
						<BsFillTelephoneFill size={15} />
						<span>123456789</span>
					</div>
					<div className="flex items-center gap-2">
						<HiMail size={18} />
						<span>test.mail@123.com</span>
					</div>
				</div>
				<div>
					<h1 className="text-xl font-semibold">Reach us on : </h1>
					<div className="flex gap-3">
						<SiGmail size={30} />
						<BsFacebook size={30} />
						<BsInstagram size={30} />
						<BsLinkedin size={30} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
