import React from 'react'
import { useSelector } from 'react-redux'

import { Items } from '../../components/items'

import HomeImg6 from '../../assets/00006-balenciaga-fall-2022-couture-credit-brand.jpg'
import RickOwens from '../../assets/1340139.jpg'
import VivienneWestwood from '../../assets/20230114_OBP001.jpg'
import DemnaGvasalia from '../../assets/246626547_0_0_1101_1100_1920x0_80_0_0_88f8c3b0133272855809ab699585ef2d.jpg'
import HomeImg9 from '../../assets/Balenciaga-Couture-Fall-Winter-2022-2023-Runway-Magazine-9-scaled.png'
import JohnGalliano from '../../assets/gettyimages-886264168.jpg'
import { Accordion } from '../../components/accordion'

export const Home = () => {
	const { products } = useSelector(state => state.products)
	console.log(products)
	if (!products.length) {
		return (
			<div className='text-xl text-center text-main-black py-10'>
				Products not found
			</div>
		)
	}

	return (
		<main className='w-full flex-col'>
			<div className='flex flex-col mb-8'>
				<label className='text-2xl md:text-4xl text-main-black text-center mb-4'>
					New items from famous brands
				</label>
				{!products.length ? (
					<label className='text-xl text-center text-main-black'>
						Products not found
					</label>
				) : (
					<div className='flex flex-wrap justify-center space-x-2 md:space-x-6'>
						{products.slice(0, 4).map(item => {
							return <Items key={item._id} data={item} />
						})}
					</div>
				)}
			</div>
			<div className='flex flex-col mb-8'>
				<div className='w-full flex flex-col xs:flex-row xs:space-x-4'>
					<div className='w-full xs:w-1/2'>
						<img src={HomeImg9} alt='9' />
					</div>
					<div className='w-full xs:w-1/2'>
						<img src={HomeImg6} alt='6' />
					</div>
				</div>
				<label className='text-2xl text-main-gray text-center'>
					Balenciaga-Couture-Fall-Winter-2022-2023
				</label>
			</div>
			<div className='flex flex-col'>
				<label className='text-4xl text-main-black text-center mb-4'>
					The greatest designers
				</label>
				<div className='hidden xs:flex flex-col space-y-8 pt-8'>
					<div className='flex items-center'>
						<img
							src={DemnaGvasalia}
							alt='Demna Gvasalia'
							className='max-w-[340px] max-h-[340px] object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-8'>
							<span className='text-4xl text-main-red'>Demna Gvasalia</span> is
							a prominent fashion designer known for his innovative and
							boundary-pushing designs. Born in Georgia in 1981, Gvasalia rose
							to prominence as the creative director of the fashion label
							Vetements and later became the artistic director of Balenciaga.
							His designs often challenge conventional fashion norms and explore
							themes of streetwear, deconstructionism, and irony. Gvasalia's
							work has earned him widespread acclaim in the fashion industry and
							has cemented his reputation as one of the most influential
							designers of his generation.
						</p>
					</div>
					<div className='flex items-center'>
						<img
							src={VivienneWestwood}
							alt='Vivienne Westwood'
							className='w-[340px] h-[340px] object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-8'>
							<span className='text-4xl text-main-red'>Vivienne Westwood</span>{' '}
							is a pioneering British fashion designer known for her bold and
							unconventional designs. With a career spanning over five decades,
							Westwood has become synonymous with punk and new wave fashion
							movements. She gained prominence in the 1970s with her influential
							boutique on King's Road in London, which became a hub for the punk
							rock scene. Westwood's designs often feature elements of
							historical costume and subversive details, challenging traditional
							notions of fashion and femininity. Throughout her career, she has
							received numerous awards and honors for her contributions to the
							fashion industry, cementing her status as one of the most
							influential designers of our time.
						</p>
					</div>
					<div className='flex items-center'>
						<img
							src={RickOwens}
							alt='Rick Owens'
							className='w-[340px] h-[340px] object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-8'>
							<span className='text-4xl text-main-red'>Rick Owens</span> is an
							American fashion designer renowned for his avant-garde and
							unconventional aesthetic. Born in California, Owens launched his
							eponymous label in 1994 and quickly gained attention for his dark,
							edgy, and often subversive designs. His collections are
							characterized by asymmetrical silhouettes, draped fabrics, and a
							monochromatic color palette, often featuring a combination of
							leather, knitwear, and other luxurious materials. Owens' unique
							vision challenges traditional notions of beauty and fashion,
							earning him a dedicated following among fashion enthusiasts and
							celebrities alike. He has received numerous awards and accolades
							for his innovative contributions to the fashion industry,
							solidifying his reputation as one of the most influential
							designers of contemporary fashion.
						</p>
					</div>
					<div className='flex items-center'>
						<img
							src={JohnGalliano}
							alt='John Galliano'
							className='w-[340px] h-[340px] object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-8'>
							<span className='text-4xl text-main-red'>John Galliano</span> is a
							British fashion designer known for his bold and theatrical
							designs. Born in Gibraltar and raised in England, Galliano rose to
							prominence in the 1980s with his avant-garde approach to fashion.
							He gained further recognition as the creative director of French
							fashion houses Givenchy and later Christian Dior, where he infused
							his collections with a sense of drama, romance, and historical
							references. Galliano's designs often feature intricate detailing,
							elaborate embellishments, and innovative tailoring techniques,
							reflecting his eclectic artistic vision. Despite facing
							controversies throughout his career, Galliano remains a highly
							influential figure in the fashion industry, celebrated for his
							creativity and boundary-pushing designs.
						</p>
					</div>
				</div>
				<div className='flex xs:hidden flex-col'>
					<Accordion text='Demna Gvasalia'>
						<img
							src={DemnaGvasalia}
							alt='Demna Gvasalia'
							className='w-full h-64 object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-2'>
							Demna Gvasalia is a prominent fashion designer known for his
							innovative and boundary-pushing designs. Born in Georgia in 1981,
							Gvasalia rose to prominence as the creative director of the
							fashion label Vetements and later became the artistic director of
							Balenciaga. His designs often challenge conventional fashion norms
							and explore themes of streetwear, deconstructionism, and irony.
							Gvasalia's work has earned him widespread acclaim in the fashion
							industry and has cemented his reputation as one of the most
							influential designers of his generation.
						</p>
					</Accordion>
					<Accordion text='Vivienne Westwood'>
						<img
							src={VivienneWestwood}
							alt='Vivienne Westwood'
							className='w-full h-64 object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-2'>
							Vivienne Westwood is a pioneering British fashion designer known
							for her bold and unconventional designs. With a career spanning
							over five decades, Westwood has become synonymous with punk and
							new wave fashion movements. She gained prominence in the 1970s
							with her influential boutique on King's Road in London, which
							became a hub for the punk rock scene. Westwood's designs often
							feature elements of historical costume and subversive details,
							challenging traditional notions of fashion and femininity.
							Throughout her career, she has received numerous awards and honors
							for her contributions to the fashion industry, cementing her
							status as one of the most influential designers of our time.
						</p>
					</Accordion>
					<Accordion text='Rick Owens'>
						<img
							src={RickOwens}
							alt='Rick Owens'
							className='w-full h-64 object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-2'>
							Rick Owens is an American fashion designer renowned for his
							avant-garde and unconventional aesthetic. Born in California,
							Owens launched his eponymous label in 1994 and quickly gained
							attention for his dark, edgy, and often subversive designs. His
							collections are characterized by asymmetrical silhouettes, draped
							fabrics, and a monochromatic color palette, often featuring a
							combination of leather, knitwear, and other luxurious materials.
							Owens' unique vision challenges traditional notions of beauty and
							fashion, earning him a dedicated following among fashion
							enthusiasts and celebrities alike. He has received numerous awards
							and accolades for his innovative contributions to the fashion
							industry, solidifying his reputation as one of the most
							influential designers of contemporary fashion.
						</p>
					</Accordion>
					<Accordion text='John Galliano'>
						<img
							src={JohnGalliano}
							alt='John Galliano'
							className='w-full h-64 object-cover'
						/>
						<p className='text-2xl text-main-black text-justify mx-2'>
							John Gallianois a British fashion designer known for his bold and
							theatrical designs. Born in Gibraltar and raised in England,
							Galliano rose to prominence in the 1980s with his avant-garde
							approach to fashion. He gained further recognition as the creative
							director of French fashion houses Givenchy and later Christian
							Dior, where he infused his collections with a sense of drama,
							romance, and historical references. Galliano's designs often
							feature intricate detailing, elaborate embellishments, and
							innovative tailoring techniques, reflecting his eclectic artistic
							vision. Despite facing controversies throughout his career,
							Galliano remains a highly influential figure in the fashion
							industry, celebrated for his creativity and boundary-pushing
							designs.
						</p>
					</Accordion>
				</div>
			</div>
		</main>
	)
}
