import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwithTabs from '../../../components/swithTabs/SwithTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'





const Trending = () => {

	const [endpoint, setEndpoint] = useState("day")

	const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

	const onTabChange = (tab) => {
		setEndpoint(tab === "Day" ? "day" : "week");
	}

	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className="carouselTitle">Trending</span>
				<SwithTabs data={["Day", "Week"]} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} />
		</div>
	)
}

export default Trending