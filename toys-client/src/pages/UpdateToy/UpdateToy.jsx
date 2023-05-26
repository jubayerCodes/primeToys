import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { useTitle } from '../../utilities/customHooks/useTitle';

const UpdateToy = () => {

    useTitle('Update Toy')

    const toy = useLoaderData()

    const { _id, name, subCategory, picture, price, available, rating, description, seller, sellerEmail } = toy

    const { user } = useContext(AuthContext)

    const subCategories = ['super cars', 'sports cars', 'classic cars']

    const handleUpdateToy = (e) => {

        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const subCategory = form.subCategory.value
        const photo = form.photo.value
        const price = form.price.value
        const available = form.available.value
        const rating = form.rating.value
        const description = form.description.value

        const toy = {
            name, subCategory, picture: photo, rating, price, available, description, seller: user.displayName, sellerEmail: user.email
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toys-server-amber.vercel.app/toy/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(toy)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Updated!',
                                'Your toy has been updated.',
                                'success'
                            )
                        }
                    })
            }
        })


    }

    return (
        <section className="updateToy-section py-40">
            <div className="updateToy-container w-[700px] mx-auto bg-[#F3F3F3] p-10 rounded-xl">
                <h2 className="section-title text-center mb-5">
                    Update Toy
                </h2>
                <form className="form mt-6 w-full" onSubmit={handleUpdateToy}>


                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        Toy Name
                    </label>
                    <input required className='w-full mb-6 text-lg p-2 rounded-md' type="text" placeholder='Name' id='name-field' name='name' defaultValue={name} />

                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        Photo Url
                    </label>
                    <input required className='w-full mb-6 text-lg p-2 rounded-md' type="text" placeholder='Photo URL' id='photo-field' name='photo' defaultValue={picture} />

                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        Sub Category
                    </label>
                    <select name="subCategory" id="subCategory-select" required className='w-full mb-6 text-lg p-2 rounded-md capitalize' defaultValue={subCategory}>
                        {
                            subCategories.map((c, idx) => <option key={idx}>{c}</option>)
                        }
                    </select>

                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        Price
                    </label>
                    <input required className='w-full mb-6 text-lg p-2 rounded-md' type="number" placeholder='Price' id='price-field' name='price' min={1} defaultValue={price} />

                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        In Stock
                    </label>
                    <input required className='w-full mb-6 text-lg p-2 rounded-md' type="number" placeholder='In Stock' id='available-field' name='available' min={0} defaultValue={available} />

                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        Rating
                    </label>
                    <input required className='w-full mb-6 text-lg p-2 rounded-md' type="number" placeholder='Rating' id='rating-field' name='rating' min={0} max={5} step={0.5} defaultValue={rating} />


                    <label htmlFor="name-field" className='mb-2 font-semibold inline-block'>
                        Description
                    </label>

                    <textarea required className='w-full mb-4 text-lg p-2 rounded-md' name="description" id="description-field" cols="30" rows="10" placeholder='Toy Description' defaultValue={description}></textarea>

                    <div className="form-btn-grp mt-2">
                        <button className="login-btn" type='submit'>
                            Update Toy
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateToy;