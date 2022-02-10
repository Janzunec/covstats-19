import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Statistcs from './pages/Stats/Statistics';
import Info from './pages/Info/Info';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Statistcs />} />
					<Route path='/info' element={<Info />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
