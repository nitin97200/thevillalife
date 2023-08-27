import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
export default function Who() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // const minus = document.querySelector(".minus")
    // let setCount3 = 1
    // minus.addEventListener("click", () => {
    //     if (setCount3 > 1){
    //         setCount3--;
    //         setCount3=(setCount3<10)?"0":setCount3
    //     }
    // })
    const sum = count + count1 + count2
    const sub = sum
    const handle1 = () => {
        if (count !== 1) {
            setCount(count - 1)

        }else{
            setCount(count=0)
        }
    }
    const handle2 = () => {
        if (count1 !== 0) {
            setCount1(count1 - 1)

        }else{
            setCount1(count1=0)
        }
    }
    const handle3 = () => {
        if (count2 !== 0) {
            setCount2(count2 - 1)

        }else{
            setCount2(count2=0)
        }
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                style={{ color: "black", marginLeft: "150px", width: "100px", height: "50px" }}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Who

                <p className='main-count'>{count + count1 + count2}Guest</p>
            </Button>
            {/* <img  src='./Images/search-img.png' alt='' /> */}
            {/* <SearchIcon sx={{ backgroundColor: primary[500],fontSize:56,position:"absolute",top:"2px",right:"3px", /> */}
            <button className='mui-butt'><SearchIcon sx={{ fontSize: 48, color: "white", cursor: "pointer" }} /></button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack spacing={2} className="">
                    <Stack>
                        <Typography variant='h5'>Adults</Typography>
                        <Typography variant='body2'>Ages 13 +</Typography>
                    </Stack>
                    <hr />
                    <Stack>
                        <Typography variant='h5'>Children</Typography>
                        <Typography variant='body2'>Ages 2-12</Typography>
                    </Stack>
                    <hr />
                    <Stack>
                        <Typography variant='h5'>Infants</Typography>
                        <Typography variant='body2'>Ages 0-2</Typography>
                    </Stack>

                </Stack>
                <div>
                    <p className='add-p'>{count}</p>
                    {/* chaning operator// */}

                    <ControlPointIcon className='add-but' onClick={() => sum !== 10 ? setCount(count + 1) : ''} />
                    <RemoveIcon className='sub-but' onClick={() => sub !== 1 ?handle1() : ""} />
                    <p className='add-p1'>{count1}</p>
                    <ControlPointIcon className='add-but1' onClick={() => sum !== 10 ? setCount1(count1 + 1) : ""} />
                    <RemoveIcon className='sub-but1' onClick={() => sub !== 1 ?handle2() : ""} />
                    <p className='add-p2'>{count2}</p>
                    <ControlPointIcon className='add-but2' onClick={() => sum !== 10 ? setCount2(count2 + 1) : ""} />
                    <RemoveIcon className='sub-but2' onClick={() => sub !== 1 ? handle3() : ""} />
                </div>
            </Menu>

        </div>
    );
}




