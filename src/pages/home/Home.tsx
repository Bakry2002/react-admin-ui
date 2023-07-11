import ChartBox from '../../components/chartBox/ChartBox';
import TopBox from '../../components/topBox/TopBox';
import './home.scss'

const  Home = () => {
    return (
        <div className='home'>
            <div className="box box-1">
                <TopBox/>
            </div>
            <div className="box box-2"><ChartBox/></div>
            <div className="box box-3"><ChartBox/></div>
            <div className="box box-4"><ChartBox/></div>
            <div className="box box-5"><ChartBox/></div>
            <div className="box box-6">Box</div>
            <div className="box box-7">Box</div>
            <div className="box box-8">Box</div>
            <div className="box box-9">Box</div>
        </div>
    );
}

export default Home;