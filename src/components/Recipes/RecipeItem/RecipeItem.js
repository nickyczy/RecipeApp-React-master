import classes from "./RecipeItem.module.css";

const RecipeItem = (props) => {
	return (
		<li className={classes.recipe}>
			<div>
				<img src={props.image} alt="" />
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div>{props.cooktime}</div>
				<div>{props.servings}</div>
			</div>
		</li>
	);
};

export default RecipeItem;
