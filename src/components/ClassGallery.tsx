import { faExternalLinkAlt, faFileInvoice, faFileSignature, faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Class } from "../typings/interfaces";
import { collegeColors, shuffle } from "../utils";
import ClassItem from "./ClassItem";

const ClassGallery = ({ classes }: { classes: Class[] }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};

	return (
		<Carousel
			swipeable={true}
			draggable={false}
			showDots={true}
			responsive={responsive}
			ssr={true} // render carousel on server-side.
			infinite={true}
			autoPlay={false}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			removeArrowOnDeviceType={["tablet", "mobile"]}
			// deviceType={this.props.deviceType}
			dotListClass="custom-dot-list-style focus:outline-none focus:border-0 text-fuchsia-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
			itemClass="carousel-item-padding-40-px p-6 "
			className="mb-6"
		>
			{shuffle(classes)
				?.slice(0, 9)
				.map((_class, idx) => {
				return (<ClassItem _class={_class} idx={idx} />)
				})}
		</Carousel>
	);
};
export default ClassGallery;
