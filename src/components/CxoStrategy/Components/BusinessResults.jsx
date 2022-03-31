import React from 'react'
import { BusinessResultItem } from './BusinessResultItem'
import { BASE_URL } from '../../../config';

function BusinessResults() {
    return (
        <div className="cxo-business-results-section">
            <div className="container">
                <div className="row cxo-bs-title-row">
                    <div className="col-md-12">
                        <h2>Create an impact on business results</h2>
                    </div>
                </div>

                <div className="row cxo-bs-boxes-row">
                    <BusinessResultItem
                        thumbnail={BASE_URL + '/img/CxoStrategy/Dedicated-Leadership.png'}
                        title={'Dedicated Leadership'}
                    />

                    <BusinessResultItem
                        thumbnail={BASE_URL + '/img/CxoStrategy/Situational-Guidance.png'}
                        title={'Situational Guidance'}
                    />

                    <BusinessResultItem
                        thumbnail={BASE_URL + '/img/CxoStrategy/Fill-temporary-gaps.png'}
                        title={'Fill temporary gaps'}
                    />

                    <BusinessResultItem
                        thumbnail={BASE_URL + '/img/CxoStrategy/Provide-decisive-direction.png'}
                        title={'Provide decisive direction'}
                    />
                </div>
            </div>
        </div>
    )
}

export default BusinessResults