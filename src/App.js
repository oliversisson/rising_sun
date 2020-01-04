import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLyrics: false,
    };
  }

  showLyrics = () => {
    this.setState({displayLyrics: true});
  }

  render() {
    const lyrics =
        "There is a house in New Orleans\n" +
        "They call the Rising Sun\n" +
        "And it's been the ruin of many a poor boy\n" +
        "And God I know I'm one";

    const styles = {
      button: {
        alignItems: 'center',
        backgroundColor: '#3333FF',
        borderRadius: 10,
        height: 35,
        margin: 10,
        overflow: 'hidden',
        width: 150,
      },
      buttonContainer: {
        alignItems: 'center',
        cursor: 'pointer',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        margin: '5px 2px 2px 2px',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    };

    return (
      <div>
        <h2>
          Do some brilliant things by clicking the button!
        </h2>

        <div id="button" style={styles.buttonContainer}>
          <div style={styles.button}>
            <div style={styles.buttonText}>
              Click me!
            </div>
          </div>
        </div>
        <p id="rising_sun">
          {this.state.displayLyrics ? lyrics : ''}
        </p>
      </div>
    );
  }
}

export default App;
