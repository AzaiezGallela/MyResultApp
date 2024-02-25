import './Bar.css';

function Bar({value,bgcolor,txtcolor,bgborder,fraction,icon}){
    return (
        <div className='barcontainer' style={{background:bgcolor,color:txtcolor,border:bgborder}}>
            <div className='content'>
                <span className="icon">{icon}</span>
                <span className="barText">{value}</span>
            </div>
            <div className='frac'>
                <span className='fraction'>{fraction}</span><span className='fixedFraction'>/100</span>
            </div>
        </div>
    );
}

export default Bar;