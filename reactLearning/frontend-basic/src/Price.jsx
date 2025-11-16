function Price({idx}) {
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let styles={ backgroundColor:'yellow',
        borderBottomLeftRadius:'14px',
        borderBottomRightRadius:'14px',
    };
    return (
        <div style={styles}>
            <span style={{textDecorationLine: 'line-through'}}>
                {oldPrices[idx]}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{fontWeight:'bold',}}>
                {newPrices[idx]}
            </span>
        </div>
    )
}
export default Price;