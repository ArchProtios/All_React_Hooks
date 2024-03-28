import React, { useRef } from 'react'

const UseRef3 = () => {

    const ref = useRef();

    const submit = (index) => {
        ref.current.querySelectorAll('img')[index].scrollIntoView();
    }
    
    return (
        <>
            <div>
                <button onClick={() => submit(0)}>Tim</button>
                <button onClick={() => submit(1)}>Tom</button>
                <button onClick={() => submit(2)}>Tommy</button>
            </div>
            <div>
                <ul ref= {ref}>
                    <li><img src="https://cdn.create.vista.com/api/media/small/593140348/stock-photo-full-length-woman-black-clothing-touching-silver-necklace-while-posing" /></li>
                    <li><img src="https://media.istockphoto.com/id/909506064/photo/unsmiling-woman-touching-her-neck.jpg?s=612x612&w=0&k=20&c=XRv7Y2HsuP-NjC5QCWiasiw1K8C_1WmencZfuLfRTiI=" /></li>
                    <li><img src="https://media.istockphoto.com/id/906741294/photo/stony-faced-man-having-a-stylish-haircut.jpg?s=612x612&w=0&k=20&c=dkxyIz2XgmO_PjvnIG6vShtQViSuN_TvnEh7ozeNsKs=" /></li>
                </ul>
            </div>
        </>
    )
}

export default UseRef3;