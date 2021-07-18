import React, { useEffect, useState, useRef } from 'react';
import Button from '../Button/button';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

const Hero = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const timeout = useRef(null);

	// useEffect(() => {
	// 	const nextSlide = () => {
	// 		setCurrent((current) => (current === length - 1 ? 0 : current + 1));
	// 	};
	// 	timeout.current = setTimeout(nextSlide, 3000);

	// 	return function () {
	// 		if (timeout.current) {
	// 			clearTimeout(timeout.current);
	// 		}
	// 	};
	// }, [current, length]);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		console.log(current);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		console.log(current);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className='heroSection'>
			<div className='heroWrapper'>
				{slides.map((slide, index) => {
					return (
						<div className='heroSlide' key={index}>
							{index === current && (
								<div className='heroSlider'>
									<img
										className='heroImage'
										src={slide.image}
										alt={slide.alt}
									/>
									<div className='heroContent'>
										<h1>{slide.title}</h1>
										<p>{slide.price}</p>
										<Button
											className="nav-btn"
											// css={`
											// 	max-width: 160px;
											// `}
											to={slide.path}
											text={slide.label}
											icon={<IoMdArrowRoundForward />}
										/>
									</div>
								</div>
							)}
						</div>
					);
				})}

				<div className='sliderButtons'>
					<IoMdArrowRoundBack className='prevArrow' onClick={prevSlide} />
					<IoMdArrowRoundForward className='nextArrow' onClick={nextSlide} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
