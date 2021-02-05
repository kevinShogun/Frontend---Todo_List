import React from "react";

const ListItem = ({ Items }) => {
	return (
		<li>
			<button type="button" className="btn btn-blank">
				{Items.name}
			</button>
		</li>
	);
};

export default ListItem;
