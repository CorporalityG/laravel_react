import React from 'react'
import './PageNotFound.css'
import { Helmet } from "react-helmet";
import { BASE_URL } from '../../config';

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>{`Page Not Found | Corporality`}</title>
        <meta name="description" content={`Why not to try other pages!`} />
        <link rel="canonical" href={`${BASE_URL}/404/`} />
      </Helmet>

      <div className='page-not-found-page'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>404</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound