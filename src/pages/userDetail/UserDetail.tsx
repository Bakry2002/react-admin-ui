import Single from '../../components/single/Single';
import { singleUser } from '../../data';
import './userDetail.scss'

const  UserDetail = () => {
    return (
        <div>
            <Single {...singleUser}/>
        </div>
    );
}

export default UserDetail;