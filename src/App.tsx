// ------------------------------------------------------------------------------------------

import './styles/globals.scss';

import { Button } from '@material-tailwind/react';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

interface Props {}

// ------------------------------------------------------------------------------------------

const App: FC<Props> = (): JSX.Element => {
	return (
		<div className='flex w-max flex-col gap-4 p-4'>
			<Button
				placeholder=''
				color='blue'
			>
				color blue
			</Button>
			<Button
				placeholder=''
				color='red'
			>
				color red
			</Button>
			<Button
				placeholder=''
				color='green'
			>
				color green
			</Button>
			<Button
				placeholder=''
				color='amber'
			>
				color amber
			</Button>
			<Button
				placeholder=''
				loading={true}
			>
				Loading
			</Button>
			<Button
				placeholder=''
				variant='outlined'
				loading={true}
			>
				Loading
			</Button>
			<Button
				placeholder=''
				variant='text'
				loading={true}
			>
				Loading
			</Button>
		</div>
	);
};

// ------------------------------------------------------------------------------------------

export default App;

// ------------------------------------------------------------------------------------------
