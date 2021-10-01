//implement the styled-components logic here.
import React from "react";
import styled from "styled-components";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    card: {
        boxSizing: 'borderBox',
        maxWidth: 410,
        margin: 0,
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },

    input: {
        padding: '1rem',
        border: '1px solid #999',
        marginBottom: '1rem',
        fontSize: '0.8rem'
    },

    button: {
        background: 'linear-gradient(to bottom, #6371c7, #5563c1)',
        borderColor: '#3f4eae',
        borderRadius: 3,
        padding: '1rem',
        color: 'white',
        fontWeight: 700,
        width: '100%',
        marginBottom: '1rem',
        fontSize: '0.8rem',
        cursor: 'pointer'
      }
});

const LoginForm = () => {
    const classes = useStyles();

    return(
        <div className={classes.card}>
            <form className={classes.form}>
                <input className={classes.input} placeholder='email'/>
                <input className={classes.input} placeholder='Password'/>
                <button className={classes.button}>Login</button>
            </form>
        </div>
    );

};

export default LoginForm;

