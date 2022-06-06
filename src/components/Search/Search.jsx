import React, { useEffect, useState } from 'react'
import './Search.css'
import { SearchItem } from './SearchItem'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import Accordion from 'react-bootstrap/Accordion'
import { useParams } from 'react-router-dom'

function Search() {

    const params = useParams();
    const search_keyword = params.search_keyword;
    const [searchResults, setSearchResults] = useState([]);
    const [showingResultsFrom, setShowingResultsFrom] = useState([]);
    const [showingResultsTo, setShowingResultsTo] = useState([]);
    const [showingResultsTotal, setShowingResultsTotal] = useState([]);
    const [searchCategories, setSearchCategories] = useState([]);

    useEffect(() => {
        getSearchResultsData(params.search_keyword);
        getSearchCategoriesData(params.search_keyword);
    }, [params]);

    async function getSearchResultsData(searchKeyword) {
        let result = await fetch(`${API_BASE_URL}/search/${searchKeyword}`);
        result = await result.json();
        setSearchResults(result.data);

        setShowingResultsFrom(result.from);
        setShowingResultsTo(result.to);
        setShowingResultsTotal(result.total);
    }

    async function getSearchCategoriesData(searchKeyword) {
        let result = await fetch(`${API_BASE_URL}/search-category/${searchKeyword}`);
        result = await result.json();
        setSearchCategories(result);
    }

    return (
        <div className='search-page'>
            <div className='search-form-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-6 offset-lg-3'>
                            {/* <form className="search-form" aria-label="search-form" role="search"> */}
                            <div className='row search-form-row'>
                                <div className='col-lg-9 col-md-9 col-sm-10 pr-0'>
                                    <input id="search-keyword" className="form-control search-keyword autocomplete-search-field" type="text" placeholder="Type to search..." />
                                </div>

                                <div className='col-lg-3 col-md-3 col-sm-2 pl-0'>
                                    <button className="search-btn">
                                        <i className="fa fa-search"></i>
                                        <span className="search-text">Search</span>
                                    </button>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>

            {
                search_keyword ?
                    <div className='search-results-section'>
                        <div className='container-lg'>
                            <div className='row search-results-row'>
                                <div className='col-lg-8'>
                                    <h1 className='results-for-keyword'>Results for "<span>{search_keyword}</span>"</h1>

                                    <div className='row'>
                                        <div className='col-lg-7'>
                                            <div className='all-results'>All Results</div>
                                        </div>
                                        <div className='col-lg-5'>
                                            <div className='number-of-results'>Showing {showingResultsFrom}-{showingResultsTo} of {showingResultsTotal} results</div>
                                        </div>
                                    </div>

                                    {
                                        searchResults ?
                                            <>
                                                {
                                                    searchResults.map((item) =>
                                                        <SearchItem
                                                            key={`${item.id}`}
                                                            thumbnail={item.article_image ? `${API_IMG_URL + item.article_image}` : ''}
                                                            title={`${item.article_title}`}
                                                            slug={`article/${item.article_slug}`}
                                                            shortDescription={item.article_short_description ?? ''}
                                                            category={
                                                                item.categories ?
                                                                    <>
                                                                        {
                                                                            item.categories.map((item) =>
                                                                                <div key={`${item.id}`} className="search-item-category">{item.category_name}</div>
                                                                            )
                                                                        }
                                                                    </>
                                                                    : null
                                                            }
                                                        />
                                                    )
                                                }
                                            </>
                                            : null
                                    }
                                </div>

                                <div className='col-lg-4'>
                                    <div className='search-filters'>
                                        <div className="search-filter-sort">
                                            <span className="search-filter-sort-by-label">Sort By:</span>
                                            <a className="search-filter-sort-type sort-active">Most Relevant</a> |
                                            <a className="search-filter-sort-type">Date</a>
                                        </div>

                                        <div className="search-filter-by">Filter By:</div>

                                        <Accordion className="search-accordion-main">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <div className="search-filter-heading">Category</div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {
                                                        searchCategories ?
                                                            <ul>
                                                                {
                                                                    searchCategories.map((item) =>
                                                                        <li key={`${item.id}`}>
                                                                            <label htmlFor={`search_filter_category_${item.category_slug}`} className="search-filter-cat-label">
                                                                                <input className="search-filter-checkbox" id={`search_filter_category_${item.category_slug}`} type="checkbox" name="search_filter_category[]" value={`${item.category_name}`} />
                                                                                <span className="search-filter-text-checkbox">{item.category_name} ({item.articles_count})</span>
                                                                            </label>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                            : null
                                                    }
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default Search