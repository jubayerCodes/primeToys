import React from 'react';
import { useTitle } from '../../utilities/customHooks/useTitle';

const Blogs = () => {

    useTitle('Blogs')

    return (
        <section className="blogs-section py-20 lg:py-28 px-5">
            <div className="blogs-container my-container text-center">
                <h2 className="section-title">
                    Interview Questions
                </h2>
                <h5 className="mini-title">
                    FAQ
                </h5>
                <div className="w-full grid grid-cols-1 items-center gap-10 mt-16">
                    <div className='text-left rounded-xl p-8 border-2'>
                        <h3 className='text-xl font-semibold mb-3'><b>Question:</b> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                        <p className="section-desc">
                            <b>Ans:</b> Access token is a token which is used tto authorize user and refresh token is used to reset access token if needed. AT first server creates an access token and send the token to client side. In the client side, the token is stored in httponly cookie. Then while client side request for data, they send the token and server side gives data after verify the token.
                        </p>
                    </div>
                    <div className='text-left rounded-xl p-8 border-2'>
                        <h3 className='text-xl font-semibold mb-3'><b>Question:</b> Compare SQL and NoSQL databases?</h3>
                        <p className="section-desc">
                            <b>Ans:</b> SQL is used for relational databases, and NoSQL is used for non-relational databases. In SQL databases data is stored in rows and tables that are linked in various ways. On the other hand, NoSQL databases allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data.
                        </p>
                    </div>
                    <div className='text-left rounded-xl p-8 border-2'>
                        <h3 className='text-xl font-semibold mb-3'><b>Question:</b> What is express js? What is Nest JS?</h3>
                        <p className="section-desc">
                            <b>Ans:</b> Express is a minimal and flexible Node.js web application framework that provides a lot of features for web and mobile applications. <br /><br />

                            And, Nest JS is a framework that helps build Node and JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications.
                        </p>
                    </div>
                    <div className='text-left rounded-xl p-8 border-2'>
                        <h3 className='text-xl font-semibold mb-3'><b>Question:</b> What is MongoDB aggregate and how does it work?</h3>
                        <p className="section-desc">
                            <b>Ans:</b> MongoDB aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;