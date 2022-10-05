import classes from "./Button.module.css"

const Button = props => {
    return <button className={classes.button}>{props.child}</button>
}

export default Button;