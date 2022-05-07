import React, { useState } from "react";

const CreateContainer = () => {

	const [title, setTitle] = useState("");
	const [calories, setCalories] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("null");
	const [fields, setFields] = useState("false");

	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center"></div>
		</div>
	);
};

export default CreateContainer;
