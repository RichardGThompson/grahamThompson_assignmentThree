import './styles.css';
import {OptionElem} from './optionElem';

export const HomePage = (props) => {
    const yearRange = [2010, 2021];
    let years = [];
    for (let index = yearRange[0]; index <= yearRange[1]; index++) {
        years.push(index);
    }
    
    return(
        <div className="home-page-container">
            <div className="homepage-title-container">
                <h1>New and Pre-Owned Cars</h1>
                <p>Browse our new and pre-owned cars!</p>
            </div>
            <div className="homepage-body">
                <div className="filter-sidebar">
                    <div className="condition-container filter-element">
                        <h2>Condition</h2>
                        {/* Checkboxes to select the condition of the vehicle */}
                        <span className="input-span">
                            <input type="checkbox" id='condition-new' name="condition-new" value="New" />
                            <label htmlFor="condition-new">New</label>
                        </span>

                        <span>
                            <input type="checkbox" id='condition-used' name="condition-used" value="Pre-Owned" />
                            <label htmlFor="condition-used">Pre-Owned</label>
                        </span>
                    </div>

                    <div className="year-container filter-element">
                        <h2>Model Year</h2>

                        <div className="year-selection-container">
                            <span>
                                <label htmlFor="year-min">Min. Model Year</label>
                                <select name='year-min' id='year-min'>
                                    {years.map((year) => <OptionElem year={year}/>)}
                                </select>
                            </span>

                            <span>
                                To
                            </span>

                            <span id='max-year-container'>
                                <label htmlFor="year-max">Max. Model Year</label>
                                <select name='year-max' id='year-max'>
                                    {years.map((year) => <OptionElem year={year}/>)}
                                </select>
                                
                            </span>
                        </div>
                    </div>
                </div>
                <div className="results-container">
                    Results Container
                </div>
            </div>
        </div>
        
    );
}