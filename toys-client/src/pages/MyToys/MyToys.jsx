import React, { useContext, useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import SingleToy from '../shared/SingleToy/SingleToy';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useTitle } from '../../utilities/customHooks/useTitle';

const MyToys = () => {

    useTitle('My Toys')

    const { user } = useContext(AuthContext)
    const [totalToys, setTotalToys] = useState(0)
    const [toys, setToys] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(20)
    const [searchText, setSearchText] = useState('')
    const [sort, setSort] = useState('')

    const totalPages = Math.ceil(totalToys / limit)

    useEffect(() => {
        fetch(`https://toys-server-amber.vercel.app/toys?page=${currentPage}&limit=${limit}&email=${user.email}&search=${searchText}&sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [currentPage, limit, sort])


    useEffect(() => {
        fetch(`https://toys-server-amber.vercel.app/toysCount?email=${user.email}&search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data.totalToys)
            })
    }, [searchText])

    const pages = [...Array(totalPages).keys()].map(page => page + 1)

    const options = [5, 10, 15, 20]

    const handleLimit = (e) => {
        setLimit(parseInt(e.target.value))
        setCurrentPage(1)
    }

    const handleSearch = e => {
        e.preventDefault()

        setCurrentPage(1)
        setSearchText(e.target.search.value)

        fetch(`https://toys-server-amber.vercel.app/toys?page=${currentPage}&limit=${limit}&email=${user.email}&search=${e.target.search.value}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    const handleCancelSearch = () => {
        setSearchText('')
        setCurrentPage(1)

        const search = document.getElementById('search-input')

        search.value = ''

        fetch(`https://toys-server-amber.vercel.app/toys?page=${currentPage}&limit=${limit}&email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    const handleDeleteToy = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toys-server-amber.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )

                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining)
                        }
                    })
            }
        })
    }

    const handleSort = (e) =>{
        setSort(e.target.value)

        setCurrentPage(1)
    }

    return (
        <section className="toys py-28">
            <div className="toys-container my-container">
                <div className="filter-aria">

                </div>
                <div className="toy-cards-container flex flex-col items-center">
                    {
                        toys ?
                            <div className="overflow-x-auto w-full">
                                <table className="table table-normal w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                                <form className="form-control" onSubmit={handleSearch}>
                                                    <div className="input-group">

                                                        <input type="text" id='search-input' name="search" placeholder="Search…" className="input input-bordered focus:outline-none" />

                                                        <button className="btn btn-square hover:bg-[#4acdd5] bg-[#F2F2F2] hover:border-[#4acdd5] text-black hover:text-white" type='submit'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                                        </button>

                                                        {
                                                            searchText !== '' && <button className="btn btn-outline hover:border-[#4acdd5] hover:bg-[#4acdd5]"
                                                                type='button' onClick={handleCancelSearch}>
                                                                X
                                                            </button>
                                                        }
                                                    </div>
                                                </form>
                                            </th>
                                            <th className='flex gap-3 items-center'>
                                                <h4>
                                                    Price
                                                </h4>
                                                <select onChange={handleSort} defaultValue={20} className="select w-fit max-w-xs focus:outline-none">
                                                        <option value="asc">ASC</option>
                                                        <option value="dsc">DSC</option>
                                                </select></th>
                                            <th>Sub Category</th>
                                            <th>Seller</th>
                                            <th>In Stock</th>
                                            <th className='flex gap-3 items-center'>
                                                <h4>
                                                    Show:
                                                </h4>
                                                <select onChange={handleLimit} defaultValue={20} className="select w-fit max-w-xs focus:outline-none">
                                                    {
                                                        options.map((option, idx) => <option key={idx}>{option}</option>)
                                                    }
                                                </select>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            toys.map(toy => <SingleToy handleDeleteToy={handleDeleteToy} myToys={true} key={toy._id} toy={toy}></SingleToy>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className='w-full mx-auto flex justify-center my-12'>
                                <ThreeCircles
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel="three-circles-rotating"
                                    outerCircleColor="#FF6799"
                                    innerCircleColor="#FF6799"
                                    middleCircleColor="#FF6799"
                                />
                            </div>
                    }
                    <div className="pagination mt-10 mx-auto">
                        <div className="btn-group">
                            {
                                pages?.map((page, idx) => <button key={idx} className={`${currentPage === page ? 'current-page' : ''} btn`} onClick={() => setCurrentPage(page)}>{page}</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyToys;