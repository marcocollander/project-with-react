import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import Icon from './Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string.isRequired,
  }
  
  render(){
    const {title, icon, cards} = this.props;
    return(
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
        <div>
          {cards.map((cardData) =>(
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>*/}
      </section>
    );
  }
}

export default Column;