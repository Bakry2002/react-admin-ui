import { Link } from 'react-router-dom';
import './chartBox.scss'
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}

const  ChartBox = (props: Props) => {
    return (
        <div className='chartBox'>
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt={`${props.title} icon`} />
                    <span>{props.title}</span>
                </div>
                <h2>{props.number}</h2>
                <Link to='/' style={{color: props.color}}>View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip 
                                contentStyle={{backgroundColor: "transparent", border: "none"}}
                                labelStyle={{display: "none"}}
                                position={{x: 10, y: 60}}
                            />
                        <Line 
                            type="monotone" 
                            dataKey={props.dataKey} 
                            stroke={props.color} 
                            strokeWidth={2}
                            dot={false} 
                        />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{ color: props.percentage < 0 ? 'tomato' : "limegreen"}}>
                        {props.percentage}%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    );
}

export default ChartBox;