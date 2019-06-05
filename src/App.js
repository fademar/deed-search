import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { DataSearch } from '@appbaseio/reactivesearch';
import { ReactiveList } from '@appbaseio/reactivesearch';

class App extends Component {

	render() {
		return (
			<ReactiveBase
				app="deeds-search"
				url="http://localhost:9200">
				<DataSearch            
            componentId="firstNameSearch"            
            dataField={["agent.firstName, counterAgent.firstName"]}                      
            className="search-bar"            
            queryFormat="and"            
            placeholder="Search for firstnames..."                  
        />



        <ReactiveList
            componentId="SearchResult"
            dataField="mongo_id"
            renderItem={(res) => <div>{res.mongo_id}</div>}
        />



				<div>
					Hello ReactiveSearch!
				</div>
			</ReactiveBase>
		);
	}
}

export default App;
