import React, { Component } from 'react';

class People extends Component{

    render(){
        const { people } = this.props;
        // console.log(this.props);
        const peopleList = people.map(person => {
            return (
                <div className="person" key={person.id}>
                    <div>Name: { person.name } </div>
                    <div>Age: { person.age } </div>
                    <div>favColor: { person.favColor }</div>
                </div>
        )
    })
    return (
        <div className="person-list">
            { peopleList }
        </div>
    )
    }
}

export default People;