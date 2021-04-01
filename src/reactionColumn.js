import React from 'react'
import styled from 'styled-components'
import Reaction from './reaction'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const ReactionList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow: 1;
  min-height: 100px;
`

export default class ReactionColumn extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }
  handler(index, oldname, val){
    this.props.handler(oldname, val)
    // this.props.handler(oldname, val, columnid)
  }
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} type="REACTION">
          {(provided, snapshot) => (
            <ReactionList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.reactions.map((reaction, index) => (
                <Reaction delete = {this.props.delete} key={reaction.name + reaction.id} reaction={reaction} index={index} handler={this.handler}/>
              ))}
              {provided.placeholder}
            </ReactionList>
          )}
        </Droppable>
      </Container>
    )
  }
}