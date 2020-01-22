import React from 'react';
import { Link } from 'react-router-dom'

export class RecipeListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={'/recipe/' + this.props.id}>
                <div>
                    label: {this.props.label} <br />
                    <img src={this.props.image} /> <br />
                </div>
            </Link>
        );
    }
}
export default RecipeListItem;