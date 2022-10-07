import classes from "./Category.module.css"

const Category = props => {
    return <div className={classes.category}>{props.child}</div>
}

export default Category;