function MsgBox({userName, color})
{
    let styles={color:color};
    return (
        <div style={styles}>
        <h1>{userName}</h1>
        </div>
    )
}

export default MsgBox;