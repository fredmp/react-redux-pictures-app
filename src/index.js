import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from "./components/ImageList";

class App extends React.Component {

  onSearchSubmit = term => {
    Axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID a1f844fd1386f89c4b3d4c5d33f998bbd8ec4d50257e10034ed0522fb5d9b957"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
