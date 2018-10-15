import React from 'react';

import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import { withRouter } from 'react-router-dom';


const SearchForm = ({
   history, 
}) => {
    let searchInput = null;

    function handleSearch(){
        const path = `/hello/${searchInput.value}`;
        history.push(path);
    }

    return (
        <Form inline onSubmit={handleSearch}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={(input) => {searchInput = input} } />
          <Button variant="outline-info">Search</Button>
        </Form>
    );
}

const SearchFormWithRouter = withRouter(SearchForm);
export default SearchFormWithRouter;