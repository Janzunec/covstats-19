import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Statistcs from './pages/Stats/Statistcs';
import Info from './pages/Info/Info';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Statistcs />} />
				<Route path='/info' element={<Info />} />
			</Routes>
		</div>
	);
}

export default App;
