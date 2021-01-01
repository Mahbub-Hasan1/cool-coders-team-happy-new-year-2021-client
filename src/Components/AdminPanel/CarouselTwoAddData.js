import React from 'react';
import { useForm } from "react-hook-form";

const CarouselTwoAddData = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(result => {
                if (result) {
                    alert('event add successfully')
                }
            })
    };

    return (
        <div>
            <h5 style={{ color: '#fff' }}>Carousel Part Three</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="originalImgUrl" defaultValue="test" ref={register({ required: true })} />
                {errors.originalImgUrl && <span>Original img is required</span>}

                <input name="thumbnailImgUrl" defaultValue="test" ref={register({ required: true })} />
                {errors.thumbnailImgUrl && <span>Thumbnail img is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default CarouselTwoAddData;