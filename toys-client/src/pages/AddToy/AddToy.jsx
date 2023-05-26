import React, { useContext } from 'react';
import { Link, json } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useTitle } from '../../utilities/customHooks/useTitle';

const AddToy = () => {
    useTitle('Add Toy')

    const {user} = useContext(AuthContext)

    const subCategories = ['super cars', 'sports cars', 'classic cars']

    const handleAddToy = (e) =>{
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

        console.log(toy);

        fetch('https://toys-server-amber.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Toy Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  .then(() => {
                    form.reset()
                  })
            }
        })

        
    }

    return (
        <section className="addToy-section py-40">
            <div className="addToy-container w-[700px] mx-auto bg-[#F3F3F3] p-10 rounded-xl">
                <h2 className="section-title text-center mb-5">
                    Add Toy
                </h2>
                <form className="form mt-6 w-full" onSubmit={handleAddToy}>


                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="text" placeholder='Name' id='email-field' name='name' />

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="text" placeholder='Photo URL' id='photo-field' name='photo' />

                    <select name="subCategory" id="subCategory-select" required className='w-full mb-4 text-lg p-2 rounded-md capitalize'>
                        {
                            subCategories.map((c, idx) => <option key={idx}>{c}</option>)
                        }
                    </select>

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="number" placeholder='Price' id='price-field' name='price' min={1}/>

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="number" placeholder='In Stock' id='available-field' name='available' min={0}/>

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="number" placeholder='Rating' id='rating-field' name='rating' min={0} max={5} step={0.5}/>

                    <textarea required className='w-full mb-4 text-lg p-2 rounded-md' name="description" id="description-field" cols="30" rows="10" placeholder='Toy Description'></textarea>

                    <div className="form-btn-grp mt-2">
                        <button className="login-btn" type='submit'>
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddToy;