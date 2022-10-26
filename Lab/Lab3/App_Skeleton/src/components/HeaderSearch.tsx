import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Genres, GridType } from '../application/customTypes';

import Logo from '../images/anireka.svg';
import Search from '../images/search.svg';
import Options from '../images/options.svg';
import Close from '../images/close.svg';

import styles from './HeaderSearch.module.scss';

interface Props {
    gridSearch: string;
    handlePresetSearch: (preset: GridType) => void;
    handleChangeSearch: (e: any) => any;
    handleTermSearch: (e: any, page: number) => any;
    handleChangeGenres: (e: any) => any;
    handleSearchGenres: () => any;
    handleChangeAdultContent: (e: any) => any;
    adultContent: boolean;
    gridGenres: Array<Genres>;
};

const HeaderSearch: React.FC<Props> = ({ gridSearch, handlePresetSearch, handleChangeSearch, handleTermSearch, handleChangeGenres, handleSearchGenres, handleChangeAdultContent, adultContent, gridGenres }) => {

    const [ optionsActive, setOptionsActive ] = useState<boolean>(false);

    const genreButtons = () => {
        return Object.values(Genres).map((el, index) => (
            <button
                key={`button-genre-${index}`}
                onClick={(e) => handleChangeGenres(e)}
                style={{
                    color: gridGenres.includes(el) ? '#FFFFFF' : '#00BDD7',
                    background: gridGenres.includes(el) ? '#00BDD7' : '#FFFFFF'
                }}
            >
                {el}
            </button>
        ))
    };

    return (
        <header className={styles.header}>
            
            <div className={styles.search_layout}>

                <Link to="/" className={styles.home}>
                    <img 
                        className={styles.home_button}
                        src={Logo}
                        alt="home"
                        aria-label="button back to home page"

                    />
                </Link>

                <form 
                    className={styles.searchbar}
                    onSubmit={(e) => handleTermSearch(e, 1)}
                >
                    <input 
                        type="text"
                        spellCheck={false}
                        autoCorrect="false"
                        placeholder="Search"
                        aria-label="text search for anime titles"
                        value={gridSearch}
                        onChange={(e) => handleChangeSearch(e)}
                        onFocus={() => setOptionsActive(false)}
                        disabled={optionsActive}
                    />
                    <button
                        aria-label="search button"
                        type="submit"
                        disabled={optionsActive}
                    >
                        <img 
                            src={Search}
                            alt="submit search"
                        />
                    </button>
                </form>

                <button
                    className={styles.options_button}
                    onClick={() => setOptionsActive(!optionsActive)}
                >
                    {
                        optionsActive ? (
                            <img 
                                src={Close}
                                alt="search options"
                                aria-label="close advanced search options"
                            />
                        ) : (
                            <img 
                                src={Options}
                                alt="search options"
                                aria-label="open advanced search options"
                            />
                        )
                    }
                </button>
            </div>

            {
                optionsActive ? (
                    <div 
                        className={styles.ui_blur}
                        onClick={() => setOptionsActive(false)}
                    ></div>
                ) : null
            }

            {
                optionsActive ? (
                    <div className={styles.options}>

                        <h2>Quick Search</h2>

                        <div className={styles.preset_grid}>
                            <button 
                                onClick={() => {
                                    handlePresetSearch(GridType.Top)
                                    setOptionsActive(false)
                                }}
                            >
                                Top
                            </button>
                            <button 
                                onClick={() => {
                                    handlePresetSearch(GridType.Popular)
                                    setOptionsActive(false)
                                }}
                            >
                                Popular
                            </button>
                            <button 
                                onClick={() => {
                                    handlePresetSearch(GridType.Airing)
                                    setOptionsActive(false)
                                }}
                            >
                                Airing
                            </button>
                        </div>

                        <h2>Filter by Genres</h2>
                        
                        <div className={styles.genre_grid}>
                            { genreButtons() }
                        </div>

                        <div className={styles.search_options_bottom}>
                            <button
                                className={styles.genre_search_button}
                                onClick={() => {
                                    handleSearchGenres();
                                    setOptionsActive(false);
                                }}
                                disabled={!gridGenres.length}
                            >
                                Search &rarr;
                            </button>

                            <div className={styles.adult_content_switch}>
                                <h3 style={{color: adultContent ? '#00BDD7' : '#FFFFFF'}}>
                                    Explicit Results
                                </h3>
                                <div className={styles.adult_toggle}>
                                    <span className={styles.adult_label}>Off</span>
                                    <input 
                                        id="adult-toggle"
                                        type="checkbox"
                                        className={styles.switch} 
                                        onChange={(e) => handleChangeAdultContent(e)}
                                        checked={adultContent}
                                    />
                                    <label htmlFor="adult-toggle" className={styles.switch_label}></label>
                                    <span className={styles.adult_label}>On</span>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : null
            }

        </header>
    )
};

export default HeaderSearch;
