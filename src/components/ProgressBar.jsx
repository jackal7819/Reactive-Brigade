// import { fetchAccountBalance } from "../services/fetchAccountBalance";
// import { useQuery } from "@tanstack/react-query";

const itemBar = Array.from({ length: 24 }, (_, idx) => ({
	id: idx + 1,
	isBalance: false,
}));

const sum = (number) => Number(number).toLocaleString('ru-RU');

const ProgressBar = () => {
	
	// const { data: balance = 0 } = useQuery({
	//   queryKey: ["accountBalance"],
	//   queryFn: fetchAccountBalance,
	//   refetchInterval: 60000,
	// });
	
	const balance = 146739;
	const balancePart = balance ? Math.floor((balance / 250000) * 100) : 0;
	const progress = Math.floor((itemBar.length / 100) * balancePart);

	for (let i = 0; i < progress; i += 1) {
		itemBar[i].isBalance = true;
	}

	return (
		<section id='goal' className='max-w-5xl mx-auto sm:mb-14 mb-8 w-[90vw]'>
			<h2 className='flex items-center justify-center mb-5 text-3xl font-semibold leading-none text-center text-black sm:text-5xl lg:text-7xl lg:mb-14'>
				Мета
				<span className='border rounded-full w-[54px] h-[54px] -ml-[38px] sm:w-[86px] sm:h-[86px] sm:-ml-[60px] lg:w-[116px] lg:h-[116px] lg:-ml-[90px] border-orange -z-10'></span>
			</h2>
			<p className='text-center font-medium leading-normal text-[20px] text-black mx-auto mb-4 md:hidden'>
				Разом до перемоги !!!
			</p>

			<div className='md:px-[18px] md:py-[86px] px-2.5 py-7 overflow-hidden bg-center bg-no-repeat bg-cover rounded md:rounded-lg bg-goalBgImg'>
				<div className='relative py-2 pr-6 text-black bg-white rounded md:px-20 md:py-7 pl-9 md:rounded-lg bg-opacity-60'>
					<div className='flex items-baseline justify-between'>
						<div className='flex items-baseline md:space-x-2.5'>
							<span className='md:text-[32px] text-[15px] font-bold leading-normal'>
								{sum(balance)} грн
							</span>
							<span className='font-normal md:leading-[20px] text-[15px] hidden md:block'>
								Вже зібрано
							</span>
						</div>

						<span className='font-medium leading-normal text-[8px] md:text-[15px]'>
							100%
						</span>
					</div>

					<span className='absolute -rotate-90 -start-1 bottom-9 font-medium leading-normal text-[8px] md:hidden'>
						Зібрано
					</span>

					<div className='p-1 md:p-1.5 border md:border-2 border-black border-solid'>
						<ul className='flex justify-between gap-x-0.5 sm:gap-x-1 md:gap-x-2 md:border border-[0.5px] border-black border-solid flex-nowrap'>
							{itemBar.map(({ id, isBalance }) => {
								return (
									<li
										key={id}
										className='h-4 bg-white sm:h-9 md:h-11 basis-3 sm:basis-4 md:basis-5'
										style={{
											backgroundColor: isBalance
												? '#2D362E'
												: 'FFFFFF',
										}}></li>
								);
							})}
						</ul>
					</div>

					<div className='flex items-baseline justify-between'>
						<span className='font-medium leading-normal text-[8px] md:text-[15px]'>
							{balancePart}%
						</span>
						<div className='flex items-baseline md:space-x-2'>
							<span className='font-normal leading-[20px] text-[15px] hidden md:block'>
								Спільна мета
							</span>
							<span className='text-[15px] md:text-[32px] font-bold leading-normal text-orange'>
								{sum(250000)} грн
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProgressBar;
