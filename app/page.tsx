const time = new Date().toLocaleTimeString();
console.log(`Page loaded at ${time}`);

const page = () => {
	return (
		<div className='block mx-auto w-fit text-center mt-10 font-bold text-red-600 text-4xl p-4 bg-gray-200 rounded-full shadow-lg'>
			Hello world
		</div>
	);
};

export default page;
