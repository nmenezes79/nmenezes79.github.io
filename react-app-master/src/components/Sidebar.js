import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div class="side">
        <h2>Sidebar Component</h2>
        <h5>Sit amet mattis vulputate</h5>
        <div class="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Non blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla..</p>
        <h3>Massa enim</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div class="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div class="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div class="fakeimg" style={{ height: 60 }}>Image</div>
      </div>
    );
  }
}

export default Sidebar