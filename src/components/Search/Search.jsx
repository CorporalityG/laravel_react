import React, { useEffect, useState } from 'react'
import './Search.css'
import { SearchItem } from './SearchItem'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import Accordion from 'react-bootstrap/Accordion'
import { useParams, useNavigate } from 'react-router-dom'
import AutoSuggest from "react-autosuggest";

const searchList = [
    { slug: "articles", name: "Articles" },
    { slug: "blogs", name: "Blogs" },
    { slug: "csuit", name: "CSuit" },
    { slug: "industrial-article", name: "Industrial Article" },
    { slug: "service-insights", name: "Service Insights" },
];

const lowerCasedsearchList = searchList.map(searchItem => {
    return {
        slug: searchItem.slug,
        name: searchItem.name.toLowerCase()
    };
});

function Search() {

    const params = useParams();
    const navigate = useNavigate();

    const search_keyword = params.search_keyword.replace("-", " ");

    let prefixSlug = '.';

    const [searchResults, setSearchResults] = useState([]);
    const [showingResultsFrom, setShowingResultsFrom] = useState([]);
    const [showingResultsTo, setShowingResultsTo] = useState([]);
    const [showingResultsTotal, setShowingResultsTotal] = useState([]);
    const [searchCategories, setSearchCategories] = useState([]);
    const [paginationLinks, setPaginationLinks] = useState([]);
    const [filterCategories, setFilterCategories] = useState([])
    const [sortBy, setSortBy] = useState([])

    let linkLabel = '';

    useEffect(() => {
        getSearchResultsData(params.search_keyword);
        getSearchCategoriesData(params.search_keyword);

        setFilterCategories([])
        setSortBy([])
    }, [params]);

    async function getSearchResultsData(searchKeyword, pageLink = '', filterCategoryList = '', sortByVal = '') {
        // console.log(sortByVal)
        let searchSlug = `search_keyword=${searchKeyword}&filter_category=${filterCategoryList}&sort_by=${sortByVal}`;

        let apiLink = (pageLink === '' ?
            `${API_BASE_URL}/search?${searchSlug}` :
            `${pageLink}&${searchSlug}`
        );

        let result = await fetch(apiLink);
        result = await result.json();
        setSearchResults(result.data);

        setShowingResultsFrom(result.from);
        setShowingResultsTo(result.to);
        setShowingResultsTotal(result.total);

        setPaginationLinks(result.links);
    }

    const paginate = (pageNumber) => {
        if (pageNumber) {
            getSearchResultsData(params.search_keyword, pageNumber, filterCategories, sortBy);
        }

        topHandler()
    }

    const filterCategory = (checked, value) => {
        if (checked) {
            let replacementList = [...filterCategories, value];
            setFilterCategories(replacementList);
        }
        else {
            let index = filterCategories.indexOf(value)
            if (index !== -1) {
                filterCategories.splice(index, 1);
                setFilterCategories(filterCategories);
            }
        }

        getSearchResultsData(params.search_keyword, '', filterCategories);

        topHandler()
    }

    const sortByFunc = (value) => {
        setSortBy(value)
        getSearchResultsData(params.search_keyword, '', filterCategories, value);
    }

    const topHandler = () => {
        const topScroll = document.getElementById('search-results-section');
        window.scrollTo({
            top: topScroll.offsetTop - 90,
            behavior: "smooth"
        });
    }

    async function getSearchCategoriesData(searchKeyword) {
        let result = await fetch(`${API_BASE_URL}/search-category/${searchKeyword}`);
        result = await result.json();
        setSearchCategories(result);
    }

    /* auto suggest start */
    const [value, setValue] = useState(search_keyword);
    const [suggestions, setSuggestions] = useState([]);

    function getSuggestions(value) {
        return lowerCasedsearchList.filter(searchItem =>
            searchItem.name.includes(value.trim().toLowerCase())
        );
    }
    /* auto suggest end */

    return (
        <div className='search-page'>
            <div className='search-form-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-6 offset-lg-3'>
                            <div className='row search-form-row'>
                                <div className='col-lg-9 col-md-9 col-sm-10 pr-0'>
                                    <AutoSuggest
                                        suggestions={suggestions}
                                        onSuggestionsClearRequested={() => setSuggestions([])}
                                        onSuggestionsFetchRequested={({ value }) => {
                                            setValue(value);
                                            setSuggestions(getSuggestions(value));
                                        }}
                                        onSuggestionSelected={(_, { suggestionValue }) => {
                                            navigate(`/search/${suggestionValue.replace(/\s/g, "-")}`)
                                        }}
                                        getSuggestionValue={suggestion => suggestion.name}
                                        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                                        inputProps={{
                                            placeholder: "Type to search...",
                                            className: "form-control search-keyword",
                                            value: value,
                                            onChange: (_, { newValue, method }) => {
                                                setValue(newValue);
                                            }
                                        }}
                                        highlightFirstSuggestion={false}
                                    />
                                </div>

                                <div className='col-lg-3 col-md-3 col-sm-2 pl-0'>
                                    <button className="search-btn" onClick={() => navigate(`/search/${value.replace(/\s/g, "-")}`)}>
                                        <i className="fa fa-search"></i>
                                        <span className="search-text">Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                search_keyword ?
                    <div id="search-results-section" className='search-results-section'>
                        <div className='container-lg'>
                            <div className='row search-results-row'>
                                <div className='col-lg-8'>
                                    <h1 className='results-for-keyword'>Results for "<span>{search_keyword}</span>"</h1>

                                    {
                                        searchResults && searchResults.length > 0 ?
                                            <>
                                                <div className='row'>
                                                    <div className='col-lg-7'>
                                                        <div className='all-results'>All Results</div>
                                                    </div>
                                                    <div className='col-lg-5'>
                                                        <div className='number-of-results'>Showing {showingResultsFrom}-{showingResultsTo} of {showingResultsTotal} results</div>
                                                    </div>
                                                </div>


                                                {
                                                    searchResults.map((item) =>
                                                        <SearchItem
                                                            key={`${item.id}`}
                                                            thumbnail={item.image ? `${API_IMG_URL + item.image}` : ''}
                                                            title={`${item.title}`}
                                                            slug={`${prefixSlug}/${item.source != "" ? item.source + "/" : ""}${item.slug}`}
                                                            shortDescription={item.short_description ?? item.description}
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
                                        {
                                            searchResults && searchResults.length > 0 ?
                                                <div className="search-filter-sort">
                                                    <span className="search-filter-sort-by-label">Sort By:</span>
                                                    <div className={`search-filter-sort-type ${sortBy == "" || sortBy === 'most-relevant' ? 'sort-active' : ''}`} onClick={() => sortByFunc('most-relevant')}>Most Relevant</div> |
                                                    <div className={`search-filter-sort-type ${sortBy === 'date' ? 'sort-active' : ''}`} onClick={() => sortByFunc('date')}>Date</div>
                                                </div>
                                                : null
                                        }

                                        {
                                            searchCategories && searchCategories.length > 0 ?
                                                <>
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
                                                                                    <li key={`${item.id}`} >
                                                                                        <label htmlFor={`search_filter_category_${item.category_slug}`} className="search-filter-cat-label">
                                                                                            <input className="search-filter-checkbox" id={`search_filter_category_${item.category_slug}`} type="checkbox" name="search_filter_category[]" value={`${item.category_slug}`} onClick={(e) => filterCategory(e.target.checked, e.target.value)} />
                                                                                            <span className="search-filter-text-checkbox">{item.category_name} ({item.count > 0 ? item.count : item.sub_count})</span>
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
                                                </>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            showingResultsTotal > 6 && paginationLinks ?
                                <div className='container-lg'>
                                    <div className='row search-pagination-row'>
                                        <div className='col-lg-12'>
                                            <div className="search-pagination-main">
                                                {
                                                    paginationLinks.map((link, index, { length, lastIndex = length - 1 }) => {
                                                        linkLabel = `${link.label}`;

                                                        if (index === 0) {
                                                            linkLabel = `Previous`;
                                                        }
                                                        else if (index === lastIndex) {
                                                            linkLabel = `Next`;
                                                        }

                                                        return <div key={index} className={`pagination-number${(index === 0) ? ' pagination-arrow pagination-prev' : ''} ${(index === lastIndex) ? ' pagination-arrow pagination-next' : ''} ${(link.active === true) ? 'pagination-active' : ''}`} onClick={() => paginate(link.url)}>{linkLabel}</div>
                                                    }
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }

                    </div>
                    : null
            }
        </div>
    )
}

export default Search