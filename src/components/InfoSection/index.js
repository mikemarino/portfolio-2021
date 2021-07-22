import React from 'react';
import Button from '../Button/button';
import { useMediaQuery } from '../../hooks/MediaStyle/MediaStyle';
import { InfoData } from '../../data/InfoData';

const InfoSection = (reverse) => {
	const isRowBased = useMediaQuery('(max-width: 768px)');

    const styles = {
		container: (isRowBased) => ({
			order: reverse ? '1' : '2',
		}),
	}

    return (
        
		<div className='section'>
            {InfoData.map((item, index) => (
                
				<div className='container'>
					<div
						className='columnLeft'
						key={index}
						style={{
							order: item.reverse ? '2' : '1',
						}}>
						<h1>{item.heading}</h1>
						<p>{item.paragraph}</p>
						<p>{item.paragraph2}</p>
						<Button
							to='/projects'
							className='nav-btn primary'
							text={item.buttonLabel}
						>
							{item.buttonLabel}
						</Button>
					</div>
					<div className='columnRight' reverse={reverse} style={styles.container(isRowBased)}>
						<img src={item.image} alt='food' />
					</div>
				</div>
            ))}
            
            
		</div>
    );
    
    
};



export default InfoSection;
