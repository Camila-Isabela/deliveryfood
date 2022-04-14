import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from './components'

const App = () => {
	return (
		<AnimatePresence exitBeforeEnter>
			<div className="w-screen h-auto flex flex-col bg-slate-200">
			<Header />
			<main className="mt-24 p-8 w-full ">
				<Routes>
                    <Route path="/*" element={<MainContainer />}/>                   
                    <Route path="/createItem" element={<CreateContainer />}/>                   
                </Routes>
			</main>
		</div>
		</AnimatePresence>		
	);
};

export default App;
