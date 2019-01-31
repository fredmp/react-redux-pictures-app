import React from 'react';
import ReactDOM from 'react-dom';
import { searchPhotos } from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    this.setState({ images: await searchPhotos(term) });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
