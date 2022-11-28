import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button/Button';

function App() {
	return (
		<>
			<div className='bg-white min-h-[50vh] flex justify-center items-center m-4'>
				<Button></Button>
			</div>
		</>
	);
}

export default App;
