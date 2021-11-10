function Cat(props){
    const mouse = props.mouse;
    return (
        <img src="/cat.jpg" alt = " CAT" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
}

export default Cat