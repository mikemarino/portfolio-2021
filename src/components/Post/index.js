import React, { useState, useEffect }from 'react';

import {Link} from 'react-router-dom';
import sanityClient from '../../client.js';

export default function Post() {

    const [postData, setPost] = useState(null)
 
    useEffect(() => {        
        sanityClient
            .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setPost(data))
            .catch(console.error);
    })

    return (

        <main>
            <section className="container">
                <h1>Blog Post Page</h1>
                <h2>Welcome to my Page of Blog Posts</h2>
                <div className="row">
                    {postData && postData.map((post, index)=>(
                        <div className="col-3">
                        <article>
                            <div className="card">
                            <h5 className="card-title">
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}>{post.title}</Link>
                            </h5>
                            <span>
                                <img className="card-img-top" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                <span>
                                    <h5>{post.title}</h5>
                                </span>
                            </span>
                                
                            </div>
                        </article>
                        </div>
                    ))}
                </div>
            </section>

        </main>

    );
}