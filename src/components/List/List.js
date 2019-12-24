import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';


class List extends React.Component {
  state = {
    columns: this.props.columns || []
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  addColumn(title){
    this.setState(state => ({
      columns: [
        ...state.columns, {
          key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
          title,
          icon: 'list-alt',
          cards: []
        }
      ]
    }));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero 
          titleText={this.props.title}
          image={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
         {this.state.columns.map(({key, ...columnProps}) =>(
            <Column key={key} {...columnProps}/>))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
      </section>
    )
  }
}

export default List;