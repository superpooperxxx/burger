import React from 'react';
import Header from './components/Header/Header';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import styles from './App.module.css';

class App extends React.Component {

  state = {
    total: 5,
    modalVisible: false
  }

  updateTotal = ( price ) => {
    this.setState({total: price});
  }

  showModal = () => {
    let modalVisible = this.state.modalVisible;
    this.setState({modalVisible: !modalVisible});
  }
  render(){
    return (
      <div>
          <Header total={this.state.total} modal={this.showModal}/>
          <BurgerBuilder className={styles.main} updatePrice={this.updateTotal} modal={this.state.modalVisible} showModal={this.showModal}/>
      </div>
    );
  }
}

export default App;
