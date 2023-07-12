import './add.scss'
import { GridColDef } from '@mui/x-data-grid';

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const  Add = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // add new item
        // axios.post(`api/${props.slug}`, {give the data here})
    }
    return (
        <div className='add'>
            <div className="modal">
                <span onClick={() => props.setOpen(false)} className="close">X</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {
                        props.columns
                        .filter((column) => column.field !== 'id' && column.field !== 'img')
                        .map((column) => (
                            <div className="item">
                                <label htmlFor={column.field}>{column.headerName}</label>
                                <input type={column.type} id={column.field} placeholder={column.headerName} />
                            </div>
                        ))
                    }
                    <button>Add</button>
                </form>
            </div>
        </div>
    );
}

export default Add;