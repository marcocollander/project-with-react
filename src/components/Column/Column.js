import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from './Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired,
  }

  addCard(title){
    this.setState(state => ({
      cards: [
        ...state.cards, {
          key: state.card.length ? state.cards[state.cards.length - 1].key + 1 : 0,
          title,
        },
      ],
    }));
  }

  render(){
    return(
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span>{this.props.title}</h3>
        <div>
          {this.state.cards.map(({key, ...cardProps}) =>(
            <Card key={key} {...cardProps}/>))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    );
  }
}

export default Column;