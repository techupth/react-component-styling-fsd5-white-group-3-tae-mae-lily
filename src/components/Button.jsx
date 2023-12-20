const Button = (props) => {
    const btnPrimary = {
        width: '171.19px',
        height: '50px',
        top: '291px',
        left: '278.92px',
        padding: '0px 16px 0px 16px',
        borderRadius: '4px',
        background: '#074EE8',   
    }
    const btnSecondary = {
        width: '171.19px',
        height: '50px',
        top: '381px',
        left: '277.78px',
        padding: '0px 16px 0px 16px',
        borderRadius: '4px',
        background: '#07A4E8',
    }

    return (
        <>
            <button style={btnPrimary}>primary</button>
            <button style={btnSecondary}>secondary</button>
        </> 
    )
};

export default Button;
