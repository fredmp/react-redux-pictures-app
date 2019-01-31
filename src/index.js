import React from 'react';
import ReactDOM from 'react-dom';
import { searchPhotos } from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await searchPhotos(term);
    this.setState({ images: response.data.results.map(image => image.urls.raw) });
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
