import React from 'react'
import './PageNotFound.css'
import MetaTags from 'react-meta-tags';
import { BASE_URL } from '../../config';

function PageNotFound() {
  return (
    <>
      <MetaTags>
        <title>{`Page Not Found | Corporality`}</title>
        <meta name="description" content={`Why not to try other pages!`} />
        <link rel="canonical" href={`${BASE_URL}/404/`} />
      </MetaTags>

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