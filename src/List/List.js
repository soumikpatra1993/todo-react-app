import React , {Component} from 'react';


class List extends Component {
    render() {     
        return (
         <div className = "note" onClick = {this.props.deleteMethod}>
            {this.props.text}
         </div>
     
        
        );
    }
}
export default List;