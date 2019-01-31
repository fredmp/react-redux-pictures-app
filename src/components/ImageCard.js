import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 }
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const { id, urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} key={id} src={urls.regular} alt={description} />
      </div>
    );
  }
}
