import classes from "./Category.module.css"

const Category = props => {
    return <button className={classes.category}>{props.child}</button>
}

export default Category;