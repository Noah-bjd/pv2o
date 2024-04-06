import react from 'react';

interface Props {
    classname: string;
    children?: React.ReactNode;
}
const Card: React.FC<Props> = ({classname, children}) =>{
    return(<div className={classname}>{children}</div>)
}
export default Card;