import React from 'react';
import { useForm } from "react-hook-form";

const CarouselThreeAddData = () => {
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
                <input name="originalImgUrl" defaultValue="original Img Url" ref={register({ required: true })} />
                {errors.originalImgUrl && <span>Original img is required</span>}

                <input name="thumbnailImgUrl" defaultValue="thumbnail Img Url" ref={register({ required: true })} />
                {errors.thumbnailImgUrl && <span>Thumbnail img is required</span>}

                <input name="thumbnailWidth" defaultValue="320" ref={register({ required: true })} />
                {errors.thumbnailWidth && <span>thumbnailWidth is required</span>}

                <input name="thumbnailHeight" defaultValue="212" ref={register({ required: true })} />
                {errors.thumbnailHeight && <span>thumbnailHeight is required</span>}

                <input name="caption" defaultValue="Your name" ref={register({ required: true })} />
                {errors.caption && <span>caption is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default CarouselThreeAddData;