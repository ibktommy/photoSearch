import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/context";

const URL = `https://api.unsplash.com/search/photos/?client_id=${
	import.meta.env.VITE_API_ACCESS_KEY
}&page=1&per_page=10`;

const Gallery = () => {
  // Get Value From Context
  const { searchTerm } = useGlobalContext()

	// Fetching Data with React Query
	const fetchedData = useQuery({
		queryKey: ["images", searchTerm],
		queryFn: async () => {
			const result = await axios.get(`${URL}&query=${searchTerm}`);

			return result.data;
		},
	});

	if (fetchedData.isLoading) {
		return (
			<section className="image-container">
				<h4>Loading...</h4>
			</section>
		);
	}

	if (fetchedData.isError) {
		return (
			<section className="image-container">
				<h4>There was an error</h4>
			</section>
		);
	}

	// Get Specific Data to work with from the fetchedData
	const urlData = fetchedData.data.results;

	if (urlData.length < 1) {
		return (
			<section className="image-container">
				<h4>No images found, please try something else</h4>
			</section>
		);
	}

	return (
		<section className="image-container">
			{urlData.map((item) => {
				const { id, description, imageURL = item?.urls?.regular } = item;
				return (
					<img src={imageURL} alt={description} key={id} className="img" />
				);
			})}
		</section>
	);
};

export default Gallery;
