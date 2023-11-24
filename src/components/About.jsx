import about from '../assets/about-imageMob.webp';
import logo from '../assets/logoAbout.svg';

const About = () => {
	return (
		<section
			id='about'
			className='block w-[90vw] max-w-5xl mx-auto md:mb-16 mb-11'>
			<div className='flex justify-center items-center gap-2.5 sm:gap-5 mb-5 md:mb-14'>
				<h2 className='text-3xl font-semibold text-black sm:text-5xl lg:text-7xl'>
					Про бригаду
				</h2>
				<img className='h-10 sm:h-28' src={logo} alt='logo' />
			</div>
			<div className='flex flex-col  gap-3 items-stretch md:flex-row py-5 text-sm text-white rounded sm:rounded-lg px-2 md:pl-5 md:pr-2.5 md:pt-10 md:pb-7 sm:text-base sm:leading-6 bg-green'>
				<p className='md:hidden '>
					Бійці 118-ї окремої механізованої бригади беруть участь у
					бойових діях на Запорізькому напрямку. У липні 118 ОМБр
					спільно із іншими бригадами прорвали оборону в районі
					Роботине.
				</p>
				<div className='flex-1 md:py-2'>
					<img
						className='object-cover w-full h-full'
						src={about}
						alt='aboutImg'
					/>
				</div>
				<div className='flex flex-col flex-1 gap-5'>
					<p className='hidden md:block'>
						Бійці 118-ї окремої механізованої бригади беруть участь
						у бойових діях на Запорізькому напрямку. У липні 118
						ОМБр спільно із іншими бригадами прорвали оборону в
						районі Роботине.
					</p>
					<p className='hidden md:block'>
						118 бригада відсуває загарбників на південь все далі.
						Передовими підрозділами рухаються коригувальники
						артилерії.
					</p>
					<p>
						Головна мета підрозділу коригування артилерії:
						збільшення ефективності нашого вогню. Щоб вже з
						другого-третього пострілу снаряди лягали точно в ціль.
						Щоб не втрачати дарма дорогоцінні снаряди. Щоб вороги
						покотились назад, у пекло.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
