
import { userRows } from '../../data';
import { GridColDef } from '@mui/x-data-grid';
import './users.scss';
import DataTable from './../../components/dataTable/DataTable';
import { useState } from 'react';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'img', headerName: 'Image', width: 100, 
        renderCell: (params) => {
            return <img src={params.row.img || '/noavatar.png' } alt="avatar" className='avatar'/>
        }
    },
    { field: 'firstName', headerName: `First Name`, type:'string', width: 100, editable: true},
    { field: 'lastName', headerName: 'Last Name', type:'string', width: 100, editable: true},
    { field: 'email', headerName: 'Email', width: 200, type:'string' },
    { field: 'phone', headerName: 'Phone', width: 120, type:'string' },
    { field: 'createdAt', headerName: 'Created At', width: 100, type: 'string'},
    { field: 'verified', headerName: 'Verified', width: 80, type: 'boolean' },
];

const  Users = () => {
    const [ open, setOpen] = useState(false);
    return (
        <div className='users'>
            <div className="info">
                <h1>users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div> 
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {
                open && <Add slug='user' columns={columns} setOpen={setOpen}/>
            }
        </div>
    );
}

export default Users;